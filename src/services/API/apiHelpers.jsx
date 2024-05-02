//save response to sesion storage
export async function saveResponseToSession (response) {
  try {
    sessionStorage.setItem(response, JSON.stringify(response));
  } catch (error) {
    console.error({
      "Error saving response to session storage:": error.response ? error.response.data : "Network or other error"
    })
    throw error;
  }
}


