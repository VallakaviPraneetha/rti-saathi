def get_rti_generation_prompt(name, address, phone, grievance, language, department):
    return f"""
You are an expert RTI (Right to Information) application drafter for India.
Your job is to convert a citizen's plain language grievance into a legally correct, 
properly formatted RTI application under the RTI Act 2005.

CITIZEN DETAILS:
- Name: {name}
- Address: {address}
- Phone: {phone if phone else 'Not provided'}
- Grievance: {grievance}
- Identified Department: {department['name']}
- PIO: {department['pio']}

INSTRUCTIONS:
1. Draft a complete, formal RTI application addressed to the PIO of {department['name']}
2. The application must follow standard RTI format
3. Convert the plain language grievance into specific, factual information requests
4. Only ask for recorded factual information - NOT opinions
5. Use formal but clear language
6. Include all mandatory sections: To, Subject, Reference to RTI Act 2005, Information Sought, Declaration
7. The language of the application should be in {language}

FORMAT THE APPLICATION EXACTLY LIKE THIS:

To,
The Public Information Officer,
{department['name']},
[Department Address]

Subject: Application under Right to Information Act, 2005

Respected Sir/Madam,

I, [applicant name], a citizen of India, hereby request the following information under Section 6(1) of the Right to Information Act, 2005:

INFORMATION SOUGHT:
1. [Specific information request 1]
2. [Specific information request 2]
3. [Add more as needed based on grievance]

APPLICANT DETAILS:
Name: {name}
Address: {address}
Phone: {phone if phone else 'Not provided'}
Date: [Current Date]

I am enclosing the application fee of Rs. 10/- as required.

I request that the above information be provided within the stipulated time of 30 days as per the RTI Act, 2005.

Thanking you,

{name}
{address}

IMPORTANT: Generate ONLY the RTI application text. Make it specific to the grievance provided.
"""

def get_validation_prompt(grievance):
    return f"""
You are an RTI Act 2005 expert. Analyze if the following grievance can be addressed through an RTI application.

GRIEVANCE: {grievance}

RTI can be used to request:
- Factual recorded information from government bodies
- Copies of documents, records, contracts
- Status of pending applications
- Budget allocations and expenditure details
- Details of government schemes and beneficiaries

RTI CANNOT be used for:
- Asking for opinions or recommendations
- Information affecting national security
- Cabinet meeting discussions
- Personal information of private individuals
- Information that would harm ongoing investigation

Respond in this EXACT JSON format only, no other text:
{{
    "is_valid": true or false,
    "validity_note": "One sentence explanation of why it is valid or what the issue is",
    "suggestions": "One sentence suggestion to improve the request if needed"
}}
"""

def get_department_prompt(grievance, departments_list):
    dept_summary = "\n".join([f"- {d['id']}: {d['name']} — handles {d['description']}" for d in departments_list])
    return f"""
You are an expert in Indian government departments and RTI filing.

GRIEVANCE: {grievance}

AVAILABLE DEPARTMENTS:
{dept_summary}

Based on the grievance, identify the MOST appropriate department to file this RTI with.

Respond in this EXACT JSON format only, no other text:
{{
    "department_id": "the id of the most relevant department from the list",
    "reason": "One sentence explaining why this department is most appropriate"
}}
"""

def get_explanation_prompt(rti_application, language):
    return f"""
The following RTI application has been drafted. 
Explain what this RTI is asking for in very simple, plain language that any ordinary Indian citizen can understand.
Keep it to 3-4 sentences maximum.
Explain in {language}.

RTI APPLICATION:
{rti_application}

Give only the plain language explanation, nothing else.
"""