//create front end logic for the user routes recreating the postman requests 
import api from './apiConnect'; 

/**
 * 
 * @param {*} email This is the email of the user
 * @param {*} password This is the password of the user
 * @param {*} displayName This is the display name of the user
 * @returns This returns the response data from the server
 */
// Registers a new user with their email, password, and display name.
export async function signup(email, password, displayName) {
  try {
    // Sends a POST request to the '/user/signup' endpoint with the user data.
    const response = await api.post('/user/signup', {
      "email": email,
      "password": password,
      "displayName": displayName
    });
    return response.data; // Returns the newly created user data from the server.
  } catch (error) {
    // Logs and rethrows the error for handling in the UI.
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
// Authenticates a user by their email and password.
export async function login(email, password) {
  try {
    // Sends a POST request to '/user/login' with user credentials.
    const response = await api.post('/user/login', 
    {
      "email": email,
      "password": password
    }); 
    return response.data; // Returns the login response data, typically including a token.
  } catch (error) {
    console.error({"Error during login:": error.response ? error.response.data : "Network or other error",})
  }
}
/**
 * 
 * @param {*} userId This is the ID of the user
 * @returns This returns the response data from the server
 */

// Updates user details based on a provided user ID and data for the update.
export async function updateUser(userId, updates) {
  try {
    // Sends a PATCH request to update user details at '/user/{userId}'.
    const response = await api.patch(`/user/${userId}`, updates);
    return response.data; // Returns the updated user information from the server.// Logs error and rethrows to manage the error response appropriately in the UI
  } catch (error) {
    console.error({
      "Error during update user:": error.response ? error.response.data : "Network or other error"
    })
    throw error;
  }
}

