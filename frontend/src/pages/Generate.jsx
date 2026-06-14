import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiMic, FiMicOff, FiArrowRight, FiAlertCircle } from 'react-icons/fi'
import { generateRTI } from '../services/api'

function Generate() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    grievance: '',
    language: 'english'
  })
  const [isListening, setIsListening] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Voice Input Handler
  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Voice input is not supported in your browser. Please use Chrome.')
      return
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.lang = formData.language === 'telugu' ? 'te-IN' : formData.language === 'hindi' ? 'hi-IN' : 'en-IN'
    recognition.interimResults = false

    recognition.onstart = () => setIsListening(true)
    recognition.onend = () => setIsListening(false)
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript
      setFormData(prev => ({ ...prev, grievance: prev.grievance + ' ' + transcript }))
    }
    recognition.onerror = () => setIsListening(false)
    recognition.start()
  }

  // Form Submit Handler
  const handleSubmit = async () => {
    if (!formData.name || !formData.address || !formData.grievance) {
      setError('Please fill in your name, address, and grievance before proceeding.')
      return
    }
    setError('')
    setLoading(true)
    try {
      const result = await generateRTI(formData)
      // Store result in sessionStorage to pass to Preview page
      sessionStorage.setItem('rtiResult', JSON.stringify(result))
      sessionStorage.setItem('rtiFormData', JSON.stringify(formData))
      navigate('/preview')
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-primary mb-2">Generate Your RTI</h1>
          <p className="text-gray-500">Fill in your details and describe your grievance in plain language</p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {['Describe', 'Review', 'Download'].map((step, index) => (
            <div key={step} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${index === 0 ? 'bg-secondary text-white' : 'bg-gray-200 text-gray-500'}`}>
                {index + 1}
              </div>
              <span className={`text-sm font-medium ${index === 0 ? 'text-secondary' : 'text-gray-400'}`}>{step}</span>
              {index < 2 && <div className="w-8 h-px bg-gray-300" />}
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-sm p-8">

          {/* Personal Details */}
          <h2 className="text-lg font-semibold text-primary mb-4">Your Details</h2>
          
          <div className="flex flex-col gap-4 mb-6">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Full Name *</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-secondary"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Address *</label>
              <input
                type="text"
                placeholder="Enter your full address"
                value={formData.address}
                onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-secondary"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Phone Number (Optional)</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-secondary"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Preferred Language</label>
              <select
                value={formData.language}
                onChange={(e) => setFormData(prev => ({ ...prev, language: e.target.value }))}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-secondary"
              >
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="telugu">Telugu</option>
              </select>
            </div>
          </div>

          {/* Grievance Input */}
          <h2 className="text-lg font-semibold text-primary mb-2">Your Grievance</h2>
          <p className="text-sm text-gray-500 mb-4">Describe in plain language what information you need from the government. Don't worry about legal language — our AI handles that.</p>

          <div className="relative">
            <textarea
              placeholder="Example: My road in our colony has not been repaired for 3 years despite multiple complaints. I want to know how much budget was allocated for road repairs in our ward and whether any contractor was paid..."
              value={formData.grievance}
              onChange={(e) => setFormData(prev => ({ ...prev, grievance: e.target.value }))}
              rows={6}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-secondary resize-none"
            />
            <button
              onClick={handleVoiceInput}
              className={`absolute bottom-3 right-3 p-2 rounded-lg transition-colors ${isListening ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
              title="Click to speak your grievance"
            >
              {isListening ? <FiMicOff /> : <FiMic />}
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2">💡 You can also click the mic button to speak your grievance</p>

          {/* Error */}
          {error && (
            <div className="mt-4 bg-red-50 border border-red-200 rounded-lg px-4 py-3 flex items-center gap-2 text-red-600 text-sm">
              <FiAlertCircle />
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-6 w-full bg-secondary hover:bg-orange-600 disabled:bg-gray-300 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-200"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Generating your RTI...
              </>
            ) : (
              <>
                Generate RTI Application <FiArrowRight />
              </>
            )}
          </button>

        </div>
      </div>
    </div>
  )
}

export default Generate