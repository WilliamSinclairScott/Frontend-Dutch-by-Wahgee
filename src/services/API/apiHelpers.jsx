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
    return userObject.displayName; // Assuming 'displayName' is the key in the stored user object
  }
  return null; // Return null if no user data is found
}

