from groq import Groq
import os
from dotenv import load_dotenv
from datetime import datetime
from prompt_templates import get_rti_generation_prompt, get_explanation_prompt

def generate_rti_application(
    name: str,
    address: str,
    phone: str,
    grievance: str,
    language: str,
    department: dict,
    api_key: str = None
):
    try:
        load_dotenv()
        key = os.getenv('GROQ_API_KEY')
        client = Groq(api_key=key)

        # Generate RTI application
        prompt = get_rti_generation_prompt(
            name=name,
            address=address,
            phone=phone,
            grievance=grievance,
            language=language,
            department=department
        )

        response = client.chat.completions.create(
            model='llama-3.1-8b-instant',
            messages=[{'role': 'user', 'content': prompt}],
            temperature=0.3
        )

        rti_text = response.choices[0].message.content.strip()

        # Replace placeholders
        current_date = datetime.now().strftime("%d %B %Y")
        rti_text = rti_text.replace("[Current Date]", current_date)
        rti_text = rti_text.replace("[Department Address]", f"Office of {department['name']}")

        # Generate plain language explanation
        explanation_prompt = get_explanation_prompt(rti_text, language)
        explanation_response = client.chat.completions.create(
            model='llama-3.1-8b-instant',
            messages=[{'role': 'user', 'content': explanation_prompt}],
            temperature=0.3
        )
        explanation = explanation_response.choices[0].message.content.strip()

        return {
            "success": True,
            "rti_application": rti_text,
            "plain_explanation": explanation
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e),
            "rti_application": "",
            "plain_explanation": ""
        }