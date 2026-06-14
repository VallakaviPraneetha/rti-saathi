import ollama
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
        # Generate RTI application
        prompt = get_rti_generation_prompt(
            name=name,
            address=address,
            phone=phone,
            grievance=grievance,
            language=language,
            department=department
        )

        response = ollama.chat(
            model='llama3.1:8b',
            messages=[{'role': 'user', 'content': prompt}]
        )

        rti_text = response['message']['content'].strip()

        # Replace placeholders with actual values
        current_date = datetime.now().strftime("%d %B %Y")
        rti_text = rti_text.replace("[Current Date]", current_date)
        rti_text = rti_text.replace("[Department Address]", f"Office of {department['name']}")

        # Generate plain language explanation
        explanation_prompt = get_explanation_prompt(rti_text, language)
        explanation_response = ollama.chat(
            model='llama3.1:8b',
            messages=[{'role': 'user', 'content': explanation_prompt}]
        )
        explanation = explanation_response['message']['content'].strip()

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