DEPARTMENTS = [
    {
        "id": "pwd",
        "name": "Public Works Department (PWD)",
        "jurisdiction": "state",
        "keywords": ["road", "bridge", "construction", "repair", "pothole", "street", "highway", "building", "infrastructure"],
        "pio": "Public Information Officer, Public Works Department",
        "description": "Handles construction and maintenance of roads, bridges, and public buildings"
    },
    {
        "id": "municipal",
        "name": "Municipal Corporation / Gram Panchayat",
        "jurisdiction": "local",
        "keywords": ["garbage", "waste", "drainage", "sewage", "water supply", "street light", "colony", "ward", "locality", "cleanliness", "sanitation"],
        "pio": "Public Information Officer, Municipal Corporation",
        "description": "Handles local civic issues like sanitation, water supply, and local infrastructure"
    },
    {
        "id": "education",
        "name": "Department of Education",
        "jurisdiction": "state",
        "keywords": ["school", "teacher", "student", "midday meal", "scholarship", "admission", "education", "college", "university", "fees", "syllabus"],
        "pio": "Public Information Officer, Department of School Education",
        "description": "Handles matters related to schools, teachers, and educational institutions"
    },
    {
        "id": "health",
        "name": "Department of Health and Family Welfare",
        "jurisdiction": "state",
        "keywords": ["hospital", "doctor", "medicine", "health", "medical", "nurse", "ambulance", "dispensary", "clinic", "treatment", "patient"],
        "pio": "Public Information Officer, Department of Health and Family Welfare",
        "description": "Handles matters related to government hospitals, doctors, and healthcare"
    },
    {
        "id": "police",
        "name": "State Police Department",
        "jurisdiction": "state",
        "keywords": ["police", "fir", "complaint", "crime", "theft", "assault", "harassment", "investigation", "arrest", "station"],
        "pio": "Public Information Officer, State Police Department",
        "description": "Handles matters related to law enforcement and police actions"
    },
    {
        "id": "revenue",
        "name": "Department of Revenue and Land Records",
        "jurisdiction": "state",
        "keywords": ["land", "property", "patta", "survey", "revenue", "mutation", "registration", "encroachment", "boundary", "ownership"],
        "pio": "Public Information Officer, Department of Revenue",
        "description": "Handles land records, property registration, and revenue matters"
    },
    {
        "id": "electricity",
        "name": "State Electricity Board / DISCOM",
        "jurisdiction": "state",
        "keywords": ["electricity", "power", "current", "bill", "meter", "connection", "voltage", "transformer", "outage", "load shedding"],
        "pio": "Public Information Officer, State Electricity Distribution Company",
        "description": "Handles electricity supply, billing, and power infrastructure"
    },
    {
        "id": "welfare",
        "name": "Department of Social Welfare",
        "jurisdiction": "state",
        "keywords": ["pension", "scheme", "welfare", "disability", "widow", "old age", "ration", "subsidy", "beneficiary", "caste certificate", "income certificate"],
        "pio": "Public Information Officer, Department of Social Welfare",
        "description": "Handles social welfare schemes, pensions, and certificates"
    },
    {
        "id": "water",
        "name": "Water Supply and Sewerage Board",
        "jurisdiction": "state",
        "keywords": ["water", "tap", "pipeline", "borewell", "tanker", "supply", "drinking water", "sewage", "drainage"],
        "pio": "Public Information Officer, Water Supply and Sewerage Board",
        "description": "Handles drinking water supply and sewerage systems"
    },
    {
        "id": "employment",
        "name": "Department of Labour and Employment",
        "jurisdiction": "state",
        "keywords": ["job", "employment", "labour", "wages", "salary", "worker", "factory", "provident fund", "pf", "esi", "contract"],
        "pio": "Public Information Officer, Department of Labour and Employment",
        "description": "Handles employment, labour rights, and workplace issues"
    },
    {
        "id": "central_finance",
        "name": "Ministry of Finance / Income Tax Department",
        "jurisdiction": "central",
        "keywords": ["tax", "income tax", "refund", "pan", "gst", "customs", "excise", "finance", "budget"],
        "pio": "Public Information Officer, Ministry of Finance",
        "description": "Handles taxation, income tax, and financial regulations"
    },
    {
        "id": "central_railways",
        "name": "Ministry of Railways / Indian Railways",
        "jurisdiction": "central",
        "keywords": ["railway", "train", "station", "ticket", "platform", "rail", "irctc", "reservation"],
        "pio": "Public Information Officer, Indian Railways / Zonal Railway",
        "description": "Handles matters related to Indian Railways"
    },
    {
        "id": "central_post",
        "name": "Department of Posts / India Post",
        "jurisdiction": "central",
        "keywords": ["post", "mail", "postal", "speed post", "courier", "money order", "post office"],
        "pio": "Public Information Officer, Department of Posts",
        "description": "Handles postal services and post office matters"
    },
    {
        "id": "central_telecom",
        "name": "Department of Telecommunications (DoT)",
        "jurisdiction": "central",
        "keywords": ["telecom", "mobile", "sim", "network", "internet", "broadband", "trai", "signal", "tower"],
        "pio": "Public Information Officer, Department of Telecommunications",
        "description": "Handles telecom regulations and service provider issues"
    },
]

def get_all_departments():
    return DEPARTMENTS

def get_department_by_id(dept_id):
    for dept in DEPARTMENTS:
        if dept["id"] == dept_id:
            return dept
    return None