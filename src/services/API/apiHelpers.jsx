//save response to sesion storage
export async function saveResponseToSession (response) {
  try {
    sessionStorage.setItem('dutch-user-object', JSON.stringify(response));
  } catch (error) {
    console.error({
      "Error saving response to session storage:": error.response ? error.response.data : "Network or other error"
    })
    throw error;
  }
}
// Function to get the user's display name from session storage
export function getUserDisplayName() {
  const userData = sessionStorage.getItem('dutch-user-object');
  if (userData) {
    const userObject = JSON.parse(userData);
    return userObject.displayName; 
  }
  return null; 
}

// Function to get the user's ID from session storage
export function getUserId() {
  const userData = sessionStorage.getItem('dutch-user-object');
  if (userData) {
    const userObject = JSON.parse(userData);
    return userObject._id; 
  }
  return null; 
}
