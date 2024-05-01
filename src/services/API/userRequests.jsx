//create front end logic for the user routes recreating the postman requests 
import api from './apiConnect'; 

/**
 * 
 * @param {*} email This is the email of the user
 * @param {*} password This is the password of the user
 * @param {*} displayName This is the display name of the user
 * @returns This returns the response data from the server
 */
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
/**
 * 
 * @param {*} email This is the email of the user
 * @param {*} password This is the password of the user
 * @returns This returns the response data from the server
 */
export async function login(email, password) {
  try {
    const response = await api.post('/user/login', 
    {
      "email": email,
      "password": password
    }); 
    return response.data;
  } catch (error) {
    console.error({"Error during login:": error.response ? error.response.data : "Network or other error",})
  }
}

export async function updateUser(userId, updates) {
  try {
    const response = await api.patch(`/user/${userId}`, updates);
    return response.data;
  } catch (error) {
    console.error({
      "Error during update user:": error.response ? error.response.data : "Network or other error"
    })
    throw error;
  }
}

