//save response to sesion storage
/**
 * Saves the full API response to session storage to maintain state across app
 * @param {*} response The full response object received from the API call.
 */
export async function saveResponseToSession (response) {
  try {
    // Stores the response data as a string in session storage under the key 'dutch-user-object'.
    sessionStorage.setItem('dutch-user-object', JSON.stringify(response));
    // Save the entire response as a string in session storage
  } catch (error) {
    console.error({
      "Error saving response to session storage:": error.response ? error.response.data : "Network or other error"
    })
    throw error;
  }
}

/**
 * 
 * @returns String This returns the user display name from session storage
 */
// Retrieves the display name of the user from session storage.
export function getUserDisplayName() {
  const userData = sessionStorage.getItem('dutch-user-object');
  if (userData) {
    const userObject = JSON.parse(userData);
    return userObject.displayName; // Return the user's display name.
  }
  return Error('No user data found in session storage'); 
}


/**
 * 
 * @returns This returns the user ID from session storage
 */
// Retrieves the unique identifier of the user from session storage.
export function getUserId() {
  // Retrieves user data from session storage by the key 'dutch-user-object'.
  const userData = sessionStorage.getItem('dutch-user-object');
  if (userData) {
    // Parses the JSON string back into an object.
    const userObject = JSON.parse(userData);
    // Returns the unique identifier of the user.
    return userObject._id;
  }// Returns null if there is no user data in session storage.
  return null; 
}
/**

 * @returns {Array} An array of objects, each containing the name and ID of a divvy.
 */
// Retrieves a list of divvys, including their names and IDs, from session storage.
export function getDivvys() {
  try {
    const userData = sessionStorage.getItem('dutch-user-object') 
    // Parses the JSON string back into an object.
    const userObject = JSON.parse(userData)
    // Extracts the array of divvys from the user data.
    const divvys = userObject.data.Divvys
    // Maps over the divvys array to transform it into an array of objects with name and ID.
    return divvys.map(divvy => ({
      name: divvy.divvyName,
      id: divvy._id
    }));
  } catch (error) {
    console.error("Error retrieving divvys from session storage:", error)
    throw error
  }
}
// Defines a function to retrieve detailed information about a specific divvy by its ID from session storage.
export function getDivvyDetails(_id) {
  try {
    // Retrieves user data from session storage by the key 'dutch-user-object'.
    const userData = sessionStorage.getItem('dutch-user-object')
     // Parses the JSON string back into an object.
    const userObject = JSON.parse(userData)
    // Extracts the array of divvys from the user data.
    const divvys = userObject.data.Divvys
    // Finds and returns the details of the divvy whose ID matches the provided _id.
    const divvyDetails = divvys.find(divvy => divvy._id === _id)
    return divvyDetails
  } catch (error) {
    console.error(`Error retrieving divvy ${_id} from session storage:`, error)
    // Rethrows the error to be handled elsewhere
    throw error
  }
}