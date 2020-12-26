import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8000',
})

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    debugger
    if (token) {
      config.headers.Authorization = token
    }

    return config
  },
  (error) => Promise.reject(error)
)

export default instance
