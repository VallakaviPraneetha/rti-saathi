import { Link } from 'react-router-dom'
import { FiFileText, FiShield, FiZap, FiDownload, FiArrowRight } from 'react-icons/fi'

function Home() {
  return (
    <div className="flex flex-col">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            🇮🇳 Every Indian has the Right to Information
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            File RTI Applications <br />
            <span className="text-secondary">In Minutes, Not Days</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Just describe your problem in plain language. RTI Saathi's AI will identify the right government department, draft a legally correct RTI application, and generate a ready-to-submit PDF — for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/generate"
              className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Generate My RTI <FiArrowRight />
            </Link>
            <Link
              to="/learn"
              className="border border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              What is RTI?
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-4">How RTI Saathi Works</h2>
          <p className="text-center text-gray-500 mb-12">Three simple steps to exercise your democratic right</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary font-bold text-2xl">1</span>
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">Describe Your Problem</h3>
              <p className="text-gray-500 text-sm">Tell us in plain Hindi, Telugu, or English what information you need from the government. No legal knowledge required.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary font-bold text-2xl">2</span>
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">AI Drafts Your RTI</h3>
              <p className="text-gray-500 text-sm">Our AI identifies the correct government department and drafts a legally proper RTI application automatically.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary font-bold text-2xl">3</span>
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">Download & Submit</h3>
              <p className="text-gray-500 text-sm">Download your ready-to-submit PDF and follow our step by step filing guide. Done in minutes.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Why RTI Saathi?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                <FiZap className="text-accent text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">AI Powered Drafting</h3>
                <p className="text-gray-500 text-sm">Gemini AI understands your grievance and converts it into a legally correct RTI application instantly.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                <FiShield className="text-accent text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">Department Identification</h3>
                <p className="text-gray-500 text-sm">Automatically identifies the correct government department and PIO to address your RTI to.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                <FiFileText className="text-accent text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">RTI Validity Check</h3>
                <p className="text-gray-500 text-sm">AI checks if your request is valid under RTI Act 2005 before drafting, saving you time and effort.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                <FiDownload className="text-accent text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">Ready to Submit PDF</h3>
                <p className="text-gray-500 text-sm">Download a professionally formatted PDF ready to submit online or by post, with filing instructions included.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Exercise Your Rights?</h2>
          <p className="text-gray-300 mb-8">Join thousands of Indians using RTI Saathi to hold the government accountable.</p>
          <Link
            to="/generate"
            className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center gap-2"
          >
            Generate My RTI Now <FiArrowRight />
          </Link>
        </div>
      </section>

    </div>
  )
}

export default Home