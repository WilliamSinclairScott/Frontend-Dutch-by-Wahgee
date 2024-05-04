//save response to sesion storage
/**
 * 
 * @param {*} response This is the response from the server
 */
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