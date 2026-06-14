import ollama
import json
from prompt_templates import get_department_prompt
from departments_db import get_all_departments, get_department_by_id

def classify_department(grievance: str, api_key: str = None):
    try:
        departments = get_all_departments()
        prompt = get_department_prompt(grievance, departments)
        
        response = ollama.chat(
            model='llama3.1:8b',
            messages=[{'role': 'user', 'content': prompt}]
        )
        
        text = response['message']['content'].strip()
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