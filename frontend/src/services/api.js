import axios from 'axios'

const BASE_URL = 'http://localhost:8000'

export const generateRTI = async (formData) => {
  const response = await axios.post(`${BASE_URL}/generate-rti`, {
    name: formData.name,
    address: formData.address,
    phone: formData.phone,
    grievance: formData.grievance,
    language: formData.language,
  })
  return response.data
}

export const downloadRTI = async (rtiData) => {
  const response = await axios.post(`${BASE_URL}/download-rti`, rtiData, {
    responseType: 'blob',
  })
  return response.data
}