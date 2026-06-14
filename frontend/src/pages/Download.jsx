import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiDownload, FiArrowLeft, FiCheckCircle, FiExternalLink } from 'react-icons/fi'
import { downloadRTI } from '../services/api'

function Download() {
  const navigate = useNavigate()
  const [rtiResult, setRtiResult] = useState(null)
  const [formData, setFormData] = useState(null)
  const [downloading, setDownloading] = useState(false)
  const [downloaded, setDownloaded] = useState(false)

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

  const handleDownload = async () => {
    setDownloading(true)
    try {
      const blob = await downloadRTI({
        rti_application: rtiResult.rti_application,
        department: rtiResult.department,
        applicant_name: formData.name,
        applicant_address: formData.address,
        applicant_phone: formData.phone,
      })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'RTI_Application_RTISaathi.pdf'
      a.click()
      window.URL.revokeObjectURL(url)
      setDownloaded(true)
    } catch (err) {
      alert('Download failed. Please try again.')
    } finally {
      setDownloading(false)
    }
  }

  if (!rtiResult) return null

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-primary mb-2">Download Your RTI</h1>
          <p className="text-gray-500">Your RTI application is ready to submit</p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {['Describe', 'Review', 'Download'].map((step, index) => (
            <div key={step} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${index === 2 ? 'bg-secondary text-white' : 'bg-accent text-white'}`}>
                {index < 2 ? '✓' : index + 1}
              </div>
              <span className={`text-sm font-medium ${index === 2 ? 'text-secondary' : 'text-accent'}`}>{step}</span>
              {index < 2 && <div className="w-8 h-px bg-gray-300" />}
            </div>
          ))}
        </div>

        {/* Download Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
          {downloaded ? (
            <div className="text-center py-6">
              <FiCheckCircle className="text-accent text-5xl mx-auto mb-4" />
              <h2 className="text-xl font-bold text-primary mb-2">RTI Downloaded Successfully!</h2>
              <p className="text-gray-500 text-sm">Your RTI application PDF has been saved to your downloads folder.</p>
            </div>
          ) : (
            <div className="text-center py-6">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiDownload className="text-secondary text-3xl" />
              </div>
              <h2 className="text-xl font-bold text-primary mb-2">Your RTI is Ready!</h2>
              <p className="text-gray-500 text-sm mb-6">Download your professionally formatted RTI application PDF</p>
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="bg-secondary hover:bg-orange-600 disabled:bg-gray-300 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 mx-auto transition-colors"
              >
                {downloading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Generating PDF...
                  </>
                ) : (
                  <>
                    <FiDownload /> Download RTI PDF
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Filing Instructions */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
          <h2 className="text-lg font-semibold text-primary mb-4">📬 How to File Your RTI</h2>
          <div className="flex flex-col gap-4">

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                <span className="text-secondary font-bold text-sm">1</span>
              </div>
              <div>
                <p className="font-medium text-sm text-primary">File Online (Recommended)</p>
                <p className="text-sm text-gray-500 mt-1">Visit the RTI Online Portal for Central Government departments. Upload your PDF and pay ₹10 fee online.</p>
                  <a
                  href="https://rtionline.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary text-sm flex items-center gap-1 mt-1 hover:underline"
                  >
                  rtionline.gov.in <FiExternalLink />
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                <span className="text-secondary font-bold text-sm">2</span>
              </div>
              <div>
                <p className="font-medium text-sm text-primary">File by Post</p>
                <p className="text-sm text-gray-500 mt-1">Print your RTI application, attach a ₹10 postal order and send it to the Public Information Officer of the identified department.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                <span className="text-secondary font-bold text-sm">3</span>
              </div>
              <div>
                <p className="font-medium text-sm text-primary">Wait for Response</p>
                <p className="text-sm text-gray-500 mt-1">Government must respond within 30 days. If they do not, you can file a First Appeal within 30 days of the deadline.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                <span className="text-secondary font-bold text-sm">4</span>
              </div>
              <div>
                <p className="font-medium text-sm text-primary">BPL Applicants</p>
                <p className="text-sm text-gray-500 mt-1">If you are Below Poverty Line, you are exempt from the fee. Attach a copy of your BPL certificate with your application.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/preview')}
            className="flex items-center gap-2 border border-gray-200 text-gray-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            <FiArrowLeft /> Back to Preview
          </button>
          <button
            onClick={() => {
              sessionStorage.clear()
              navigate('/generate')
            }}
            className="flex-1 bg-primary hover:bg-blue-900 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            Generate Another RTI
          </button>
        </div>

      </div>
    </div>
  )
}

export default Download