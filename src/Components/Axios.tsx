import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://sample.com',
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
