/**
 * 
 * @returns String This returns the user display name from session storage
 */
export function getUserDisplayName() {
  const userData = sessionStorage.getItem('dutch-user-object');
  if (userData) {
    const userObject = JSON.parse(userData);
    return userObject.data.displayName
  }
  return Error('No user data found in session storage'); 
}

/**
 * 
 * @returns This returns the user ID from session storage
 */
export function getUserId() {
  const userData = sessionStorage.getItem('dutch-user-object');
  if (userData) {
    const userObject = JSON.parse(userData);
    return userObject._id; 
  }
  return null; 
}

/**
 * Retrieves an array of divvys from session storage, including their names and IDs.
 * This is useful for rendering lists of divvys with clickable links to their detailed views.
 * @returns {Array} An array of objects, each containing the name and ID of a divvy.
 */
export function getDivvys() {
  try {
    const userData = sessionStorage.getItem('dutch-user-object') 
    const userObject = JSON.parse(userData)
    const divvys = userObject.data.Divvys
    return divvys.map(divvy => ({
      name: divvy.divvyName,
      id: divvy._id
    }));
  } catch (error) {
    console.error("Error retrieving divvys from session storage:", error)
    throw error
  }
}

export function getDivvyDetails(_id) {
  try {
    const userData = sessionStorage.getItem('dutch-user-object')
    const userObject = JSON.parse(userData)
    const divvys = userObject.data.Divvys
    const divvyDetails = divvys.find(divvy => divvy._id === _id)
    return divvyDetails
  } catch (error) {
    console.error(`Error retrieving divvy ${_id} from session storage:`, error)
    throw error
  }
}