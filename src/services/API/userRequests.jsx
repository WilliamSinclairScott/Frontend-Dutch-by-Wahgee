//create front end logic for the user routes recreating the postman requests 
import api from './apiConnect'; 

export async function signup(email, password, displayName) {
  try {
    const response = await api.post('/user/signup', {
      "email": email,
      "password": password,
      "displayName": displayName
    });
    return response.data;
  } catch (error) {
    console.error({"Error during signup:": error.response ? error.response.data : "Network or other error",
   "Detailed Error:": error});
    throw error; // Throwing error to let the caller handle it, possibly in the UI
  }
}

