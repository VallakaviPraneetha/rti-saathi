from groq import Groq
import json
import os
from dotenv import load_dotenv
from prompt_templates import get_validation_prompt

def validate_rti_request(grievance: str, api_key: str = None):
    try:
        load_dotenv()
        key = os.getenv('GROQ_API_KEY')
        
        client = Groq(api_key=key)
        prompt = get_validation_prompt(grievance)
        
        response = client.chat.completions.create(
            model='llama-3.1-8b-instant',
            messages=[{'role': 'user', 'content': prompt}],
            temperature=0.3
        )
        
        text = response.choices[0].message.content.strip()
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