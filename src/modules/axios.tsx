import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://62938324089f87a57ac18a89.mockapi.io/api/v1',
})

axiosInstance.defaults.timeout = 2500

axios.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
)

axios.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export default axiosInstance
