import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheckCircle, FiXCircle } from 'react-icons/fi'

function LearnRTI() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-primary mb-3">What is RTI?</h1>
          <p className="text-gray-500">Everything you need to know about your Right to Information</p>
        </div>

        {/* What is RTI */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
          <h2 className="text-xl font-bold text-primary mb-4">📜 The Right to Information Act, 2005</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            The Right to Information (RTI) Act 2005 is a landmark Indian law that gives <strong>every Indian citizen</strong> the legal right to request information from any government body — central, state, or local. The government <strong>must respond within 30 days.</strong>
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Before RTI, government functioning was completely opaque. Citizens had no way to question how public money was spent or why decisions were made. RTI changed that fundamentally — it is one of the most powerful democratic tools available to ordinary Indians.
          </p>
        </div>

        {/* How it works */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
          <h2 className="text-xl font-bold text-primary mb-6">⚙️ How RTI Works</h2>
          <div className="flex flex-col gap-6">
            {[
              { step: '1', title: 'Identify the Right Department', desc: 'Every government department has a designated Public Information Officer (PIO) who is legally responsible for responding to RTI requests.' },
              { step: '2', title: 'Write the Application', desc: 'Must clearly state what information is being requested, addressed correctly with your name and address included.' },
              { step: '3', title: 'Pay the Fee', desc: '₹10 for central government RTIs. BPL applicants are completely exempt from this fee.' },
              { step: '4', title: 'Submit Online or by Post', desc: 'Submit via rtionline.gov.in for central departments, or send by post to the PIO of the concerned department.' },
              { step: '5', title: 'Wait for Response', desc: 'Government must respond within 30 days. If they don\'t, file a First Appeal, then a Second Appeal to the Information Commission.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-secondary font-bold text-sm">{item.step}</span>
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm">{item.title}</p>
                  <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What you can and cannot ask */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
          <h2 className="text-xl font-bold text-primary mb-6">✅ What You Can and Cannot Ask</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-accent mb-3 flex items-center gap-2"><FiCheckCircle /> You CAN ask for</h3>
              <ul className="flex flex-col gap-2">
                {[
                  'Budget allocations and expenditures',
                  'Status of your pending applications',
                  'Details of government contracts',
                  'Copies of official documents',
                  'Inspection of government records',
                  'Salary details of public servants',
                ].map((item) => (
                  <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-accent mt-0.5">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-500 mb-3 flex items-center gap-2"><FiXCircle /> You CANNOT ask for</h3>
              <ul className="flex flex-col gap-2">
                {[
                  'Opinions or recommendations',
                  'Cabinet meeting discussions',
                  'Information affecting national security',
                  'Personal information of private individuals',
                  'Information that would harm investigation',
                  'Classified or sensitive documents',
                ].map((item) => (
                  <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Real examples */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <h2 className="text-xl font-bold text-primary mb-6">💡 Real Examples of RTI Impact</h2>
          <div className="flex flex-col gap-4">
            {[
              { emoji: '🏗️', title: 'Road Repair Corruption Exposed', desc: 'A citizen filed RTI asking how much was spent on road repairs in their ward. The response revealed ₹50 lakhs was paid to a contractor for work never done.' },
              { emoji: '🏫', title: 'School Funds Recovered', desc: 'Parents used RTI to find out how mid-day meal funds were spent. The inquiry revealed massive misappropriation and led to action against school officials.' },
              { emoji: '💼', title: 'Job Appointment Challenged', desc: 'An RTI applicant discovered an unqualified candidate was appointed to a government job through nepotism, leading to the appointment being cancelled.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <p className="font-semibold text-primary text-sm">{item.title}</p>
                  <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Ready to File Your RTI?</h2>
          <p className="text-gray-300 mb-6 text-sm">RTI Saathi makes it simple — just describe your problem and we handle the rest.</p>
          <Link
            to="/generate"
            className="bg-secondary hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors"
          >
            Generate My RTI <FiArrowRight />
          </Link>
        </div>

      </div>
    </div>
  )
}

export default LearnRTI