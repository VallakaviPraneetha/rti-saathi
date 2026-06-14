import ollama
import json
from prompt_templates import get_validation_prompt

def validate_rti_request(grievance: str, api_key: str = None):
    try:
        prompt = get_validation_prompt(grievance)
        response = ollama.chat(
            model='llama3.1:8b',
            messages=[{'role': 'user', 'content': prompt}]
        )
        text = response['message']['content'].strip()
        text = text.replace('```json', '').replace('```', '').strip()
        
        result = json.loads(text)
        return {
            "is_valid": result.get("is_valid", True),
            "validity_note": result.get("validity_note", "Your request appears valid under RTI Act 2005"),
            "suggestions": result.get("suggestions", "")
        }
    except Exception as e:
        return {
            "is_valid": True,
            "validity_note": "Your request has been accepted for processing",
            "suggestions": ""
        }