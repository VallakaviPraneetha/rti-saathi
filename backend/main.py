from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from dotenv import load_dotenv
import os

from validator import validate_rti_request
from department_classifier import classify_department
from rti_generator import generate_rti_application
from pdf_generator import generate_rti_pdf

load_dotenv()

app = FastAPI(title="RTI Saathi API", version="1.0.0")

# CORS — allows React frontend to talk to FastAPI backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "not-needed")

# Request Models
class RTIRequest(BaseModel):
    name: str
    address: str
    phone: str = ""
    grievance: str
    language: str = "english"

class DownloadRequest(BaseModel):
    rti_application: str
    department: str
    applicant_name: str
    applicant_address: str
    applicant_phone: str = ""

# Health Check
@app.get("/")
def root():
    return {"message": "RTI Saathi API is running!"}

# Main RTI Generation Endpoint
@app.post("/generate-rti")
async def generate_rti(request: RTIRequest):
    if not request.grievance or len(request.grievance) < 20:
        raise HTTPException(status_code=400, detail="Please provide a detailed grievance")

    # Step 1 — Validate RTI request
    validation = validate_rti_request(request.grievance, GEMINI_API_KEY)

    # Step 2 — Classify department
    dept_result = classify_department(request.grievance, GEMINI_API_KEY)
    department = dept_result["department"]
    department_reason = dept_result["reason"]

    # Step 3 — Generate RTI application
    rti_result = generate_rti_application(
        name=request.name,
        address=request.address,
        phone=request.phone,
        grievance=request.grievance,
        language=request.language,
        department=department,
        api_key=GEMINI_API_KEY
    )

    if not rti_result["success"]:
        raise HTTPException(status_code=500, detail="Failed to generate RTI application")

    return {
        "is_valid": validation["is_valid"],
        "validity_note": validation["validity_note"],
        "department": department["name"],
        "department_reason": department_reason,
        "rti_application": rti_result["rti_application"],
        "plain_explanation": rti_result["plain_explanation"]
    }

# PDF Download Endpoint
@app.post("/download-rti")
async def download_rti(request: DownloadRequest):
    try:
        pdf_buffer = generate_rti_pdf(
            rti_application=request.rti_application,
            department=request.department,
            applicant_name=request.applicant_name,
            applicant_address=request.applicant_address,
            applicant_phone=request.applicant_phone
        )

        return StreamingResponse(
            pdf_buffer,
            media_type="application/pdf",
            headers={
                "Content-Disposition": "attachment; filename=RTI_Application_RTISaathi.pdf"
            }
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))