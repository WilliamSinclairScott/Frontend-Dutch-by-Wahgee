import axios from 'axios'
import { saveResponseToSession } from './apiHelpers'
const api = axios.create({
  baseURL: 'https://dutch-api-96185a8842ba.herokuapp.com',
  // baseURL: 'http://localhost:7777',
  withCredentials: true
})
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = token
    return config
})

api.interceptors.response.use(response => {
  saveResponseToSession(response)
  return response
})


export default api