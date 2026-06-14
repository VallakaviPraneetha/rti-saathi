from groq import Groq
import json
import os
from dotenv import load_dotenv
from prompt_templates import get_department_prompt
from departments_db import get_all_departments, get_department_by_id

def classify_department(grievance: str, api_key: str = None):
    try:
        load_dotenv()
        key = os.getenv('GROQ_API_KEY')
        client = Groq(api_key=key)
        
        departments = get_all_departments()
        prompt = get_department_prompt(grievance, departments)
        
        response = client.chat.completions.create(
            model='llama-3.1-8b-instant',
            messages=[{'role': 'user', 'content': prompt}],
            temperature=0.3
        )
        
        text = response.choices[0].message.content.strip()
        text = text.replace('```json', '').replace('```', '').strip()
        
        result = json.loads(text)
        dept_id = result.get("department_id", "municipal")
        reason = result.get("reason", "This department handles your type of grievance")
        
        department = get_department_by_id(dept_id)
        
        if not department:
            department = get_department_by_id("municipal")
            reason = "This department handles general civic grievances"
        
        return {
            "department": department,
            "reason": reason
        }
        
    except Exception as e:
        department = get_department_by_id("municipal")
        return {
            "department": department,
            "reason": "This department handles general civic grievances"
        }