# RTI Saathi 🇮🇳
### AI-Powered RTI Application Generator for Indian Citizens

RTI Saathi is a full-stack AI web application that converts any citizen's plain language grievance into a legally correct, ready-to-submit RTI (Right to Information) application in minutes.

---

## Live Demo
- **Frontend:** https://rti-saathi-pied.vercel.app
- **Backend API:** https://rti-saathi-backend.onrender.com

---

## Problem Statement
Every Indian citizen has the Right to Information under the RTI Act 2005 — yet over 80% never use it because:
- RTI applications require legal language most citizens don't know
- Filing to the wrong government department is the #1 reason for rejection
- No accessible tool exists to guide ordinary citizens through the process

---

## Solution
RTI Saathi removes every barrier between a citizen and their constitutional right:
1. Describe your problem in plain Hindi, Telugu, or English
2. AI validates whether your request is RTI-able
3. AI identifies the correct government department automatically
4. AI drafts a legally proper RTI application
5. Download a professionally formatted PDF ready to submit

---

## Tech Stack
--------------------------------------------
|      Layer     |       Technology        |
|----------------|-------------------------|
| Frontend       | React.js + Tailwind CSS |
| Backend        | Python + FastAPI        |
| AI Core        | Groq API + LLaMA 3.1 8B |
| PDF Generation | ReportLab               |
| Voice Input    | Web Speech API          |
| Deployment     | Vercel (frontend) +     |
|                |  Render (backend)       |
--------------------------------------------
---

## Run Locally

### Prerequisites
- Node.js 18+
- Python 3.9+
- Groq API Key (free at https://console.groq.com)

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
### Backend Setup
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt
```
Create a `.env` file in the backend folder:
GROQ_API_KEY=your_groq_api_key_here
Then run:
```bash
uvicorn main:app --reload
```

---
## Project Structure
rti-saathi/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
├── backend/
│   ├── main.py
│   ├── rti_generator.py
│   ├── department_classifier.py
│   ├── validator.py
│   ├── pdf_generator.py
│   ├── prompt_templates.py
│   └── departments_db.py

---
## AI Pipeline
User Grievance Input
|
Step 1: RTI Validity Check (Groq + LLaMA 3.1)
|
Step 2: Department Classification (14 departments)
|
Step 3: RTI Application Generation
|
Step 4: Plain Language Explanation
|
PDF Download + Filing Guide
---

## Supported Government Departments
- Public Works Department
- Municipal Corporation
- Department of Education
- Department of Health
- State Police Department
- Department of Revenue
- State Electricity Board
- Department of Social Welfare
- Water Supply Board
- Department of Labour
- Ministry of Finance
- Indian Railways
- Department of Posts
- Department of Telecommunications

---

## About RTI
The Right to Information Act 2005 gives every Indian citizen the legal right to request information from any government body. The government must respond within 30 days. RTI Saathi makes this constitutional right accessible to everyone.

---

## Built By
Vallakavi Praneetha — EduNet x IBM Skillsphere AI Internship 2026

---

## Disclaimer
RTI Saathi is an AI tool to help draft RTI applications. It is not a legal service. Always verify your application before submission.