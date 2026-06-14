import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowRight, FiArrowLeft, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'

function Preview() {
  const navigate = useNavigate()
  const [rtiResult, setRtiResult] = useState(null)
  const [formData, setFormData] = useState(null)

  useEffect(() => {
    const result = sessionStorage.getItem('rtiResult')
    const form = sessionStorage.getItem('rtiFormData')
    if (!result) {
      navigate('/generate')
      return
    }
    setRtiResult(JSON.parse(result))
    setFormData(JSON.parse(form))
  }, [navigate])

  if (!rtiResult) return null

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-primary mb-2">Review Your RTI</h1>
          <p className="text-gray-500">Review the AI generated RTI application before downloading</p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {['Describe', 'Review', 'Download'].map((step, index) => (
            <div key={step} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${index === 1 ? 'bg-secondary text-white' : index < 1 ? 'bg-accent text-white' : 'bg-gray-200 text-gray-500'}`}>
                {index < 1 ? '✓' : index + 1}
              </div>
              <span className={`text-sm font-medium ${index === 1 ? 'text-secondary' : index < 1 ? 'text-accent' : 'text-gray-400'}`}>{step}</span>
              {index < 2 && <div className="w-8 h-px bg-gray-300" />}
            </div>
          ))}
        </div>

        {/* Validity Check */}
        <div className={`rounded-xl p-4 mb-6 flex items-start gap-3 ${rtiResult.is_valid ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          {rtiResult.is_valid ? (
            <FiCheckCircle className="text-accent text-xl shrink-0 mt-0.5" />
          ) : (
            <FiAlertCircle className="text-red-500 text-xl shrink-0 mt-0.5" />
          )}
          <div>
            <p className={`font-semibold text-sm ${rtiResult.is_valid ? 'text-accent' : 'text-red-600'}`}>
              {rtiResult.is_valid ? 'Your request is valid under RTI Act 2005' : 'Potential Issue Detected'}
            </p>
            <p className="text-sm text-gray-600 mt-1">{rtiResult.validity_note}</p>
          </div>
        </div>

        {/* Department Badge */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <p className="text-sm font-semibold text-primary mb-1">🏛️ Identified Department</p>
          <p className="text-lg font-bold text-blue-700">{rtiResult.department}</p>
          <p className="text-sm text-gray-500 mt-1">{rtiResult.department_reason}</p>
        </div>

        {/* RTI Application Preview */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
          <h2 className="text-lg font-semibold text-primary mb-6 pb-3 border-b border-gray-100">
            Generated RTI Application
          </h2>
          <div className="whitespace-pre-wrap text-sm text-gray-700 leading-relaxed font-mono">
            {rtiResult.rti_application}
          </div>
        </div>

        {/* Plain Language Explanation */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
          <h3 className="font-semibold text-primary mb-2">📋 What This RTI Says — In Simple Words</h3>
          <p className="text-sm text-gray-700 leading-relaxed">{rtiResult.plain_explanation}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/generate')}
            className="flex items-center gap-2 border border-gray-200 text-gray-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            <FiArrowLeft /> Edit Grievance
          </button>
          <button
            onClick={() => navigate('/download')}
            className="flex-1 bg-secondary hover:bg-orange-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            Proceed to Download <FiArrowRight />
          </button>
        </div>

      </div>
    </div>
  )
}

export default Preview