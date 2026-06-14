import { Link } from 'react-router-dom'
import { FiFileText, FiHeart } from 'react-icons/fi'

function Footer() {
  return (
    <footer className="bg-primary text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FiFileText className="text-secondary text-xl" />
              <span className="text-white font-bold text-lg">RTI <span className="text-secondary">Saathi</span></span>
            </div>
            <p className="text-sm text-gray-400">
              Your AI companion for exercising your Right to Information. Empowering every Indian citizen.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/generate" className="hover:text-white transition-colors">Generate RTI</Link>
              <Link to="/learn" className="hover:text-white transition-colors">Learn RTI</Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="text-white font-semibold mb-3">Disclaimer</h3>
            <p className="text-sm text-gray-400">
              RTI Saathi is an AI tool to help draft RTI applications. 
              It is not a legal service. Always verify your application 
              before filing.
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          <p className="flex items-center justify-center gap-1">
            Made with <FiHeart className="text-secondary" /> for every Indian citizen
          </p>
          <p className="mt-1">© 2026 RTI Saathi. Built for EduNet x IBM Skillsphere Internship.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer