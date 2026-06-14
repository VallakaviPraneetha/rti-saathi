import { Link, useLocation } from 'react-router-dom'
import { FiFileText } from 'react-icons/fi'

function Navbar() {
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/generate', label: 'Generate RTI' },
    { path: '/learn', label: 'Learn RTI' },
  ]

  return (
    <nav className="bg-primary shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <FiFileText className="text-secondary text-2xl" />
          <span className="text-white font-bold text-xl">RTI <span className="text-secondary">Saathi</span></span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-secondary'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/generate"
            className="bg-secondary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors duration-200"
          >
            File RTI Now
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar