import axios from 'axios'
const api = axios.create({
  //baseURL: /* DEPLOYED SERVER GOES HERE */
  baseURL: 'http://localhost:7777',
  withCredentials: true
})
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = token
    return config
})

export default api