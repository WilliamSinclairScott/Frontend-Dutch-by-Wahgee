import axios from 'axios'
<<<<<<< HEAD
import { saveResponseToSession } from './apiHelpers'
// Creating an instance of axios with default properties
=======
import { saveResponseToSession } from '../SessionStorage/StoreAndUpdate'
>>>>>>> b4da9bba4055e568e404e482570006ce02d7676c
const api = axios.create({
// Setting the base URL for all HTTP requests
  baseURL: 'https://dutch-api-96185a8842ba.herokuapp.com',
// Uncomment the following line to use a local server during development
// baseURL: 'http://localhost:7777',
// Enabling credentials such as cookies, authorization headers or TLS client certificates
  withCredentials: true
})
// Adding a request interceptor to include the authorization token in every request
api.interceptors.request.use(config => {
// Retrieving the user's token from localStorage
    const token = localStorage.getItem('token')
    // Setting the Authorization header with the token for secure requests
    config.headers.Authorization = token
    return config
})
// Adding a response interceptor to process the response before passing it to then/catch
api.interceptors.response.use(response => {
  // Saving the response data to session storage using a helper function
  saveResponseToSession(response)
  return response
})

export default api