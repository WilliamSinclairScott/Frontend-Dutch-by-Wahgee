import api from './apiConnect';

//get all divvys
/**
 * 
 * @returns
 */
//Retrieves all divvys from the server
export async function getAllDivvys() {
  try {
    const response = await api.get('/divvy'); //sends a GET request to the '/divvy' endpoint
    return response.data;
  } catch (error) {
    console.error({ 
      "Error during get all divvys:": error.response ? error.response.data : "Network or other error"
    })
    throw error;
  }
}

/**
 * 
 * @param {*} divvyData This is the data for the divvy
 * @returns This returns the response data from the server
 */
//creates a new divvy with the data provided
export async function createDivvy(divvyData) {
  try {
    const response = await api.post('/divvy', divvyData); //Sends a POST request with divvyData to the '/divvy/' endpoint
    return response.data //returns the response data from the server
  } catch (error) {
    console.error("Error during create divvy:", error.response ? error.response.data : "Network or other error")
    throw error
  }
}
//get a specific divvy by ID
/**
 * 
 * @param {*} divvyId This is the ID of the divvy
 * @returns This returns the response data from the server
 */

export async function getDivvyById(divvyId) {
  try {
    const response = await api.get(`/divvy/${divvyId}`); //
    return response.data;
  } catch (error) {
    console.error({
      "Error fetching divvy details:": error.response ? error.response.data : "Network or other error"
    })
    throw error;
  }
}

/**
 * 
 * @param {*} divvyId This is the ID of the divvy
 * @param {*} divvyData This is the data for the divvy
 * @returns This returns the response data from the server
 */
// Updates a specific divvy by its ID with provided data.
export async function updateDivvy(divvyId, divvyData) {
  try {
    const response = await api.patch(`/divvy/${divvyId}`, divvyData); // Sends a PATCH request with divvyData to the '/divvy/{divvyId}' endpoint.
    return response.data;
  } catch (error) {
    console.error("Error updating divvy:", error.response ? error.response.data : "Network or other error");
    throw error;
  }
}

/**
 * 
 * @param {*} divvyId This is the ID of the divvy
 * @returns This returns the response data from the server
 */
// Deletes a specific divvy by its ID.
export async function deleteDivvy(divvyId) {
  try {
    const response = await api.delete(`/divvy/${divvyId}`); // Send a DELETE request to the '/divvy/:id' endpoint
    return response.data;
  } catch (error) {
    console.error("Error deleting divvy:", error.response ? error.response.data : "Network or other error");
    throw error;
  }
}
// Create a transaction within a divvy
/**
 * 
 * @param {*} divvyId This is the ID of the divvy
 * @param {*} transactionData This is the data for the transaction
 * @returns This returns the response data from the server
 */
export async function createTransaction(divvyId, transactionData) {
  try {
    const response = await api.post(`/divvy/${divvyId}/transactions`, transactionData); // Sends a POST request with transactionData to the '/divvy/{divvyId}/transactions' endpoint.
    return response.data;
  } catch (error) {
    console.error("Error creating transaction:", error.response ? error.response.data : "Network or other error");
    throw error;
  }
}

/**
 * 
 * @param {*} divvyId This is the ID of the divvy
 * @param {*} transactionId This is the ID of the transaction
 * @param {*} transactionData This is the data for the transaction
 * @returns This returns the response data from the server
 */
// Update a transaction within a divvy
export async function updateTransaction(divvyId, transactionId, transactionData) {
  try {
    const response = await api.patch(`/divvy/${divvyId}/transactions/${transactionId}`, transactionData); // Sends a PATCH request with transactionData to the '/divvy/{divvyId}/transactions/{transactionId}' endpoint.
    return response.data;
  } catch (error) {
    console.error("Error updating transaction:", error.response ? error.response.data : "Network or other error");
    throw error;
  }
}

/**
 * 
 * @param {*} divvyId This is the ID of the divvy
 * @param {*} transactionId This is the ID of the transaction
 * @returns This returns the response data from the server
 */
// Deletes a specific transaction within a divvy.
export async function deleteTransaction(divvyId, transactionId) {
  try {
    const response = await api.delete(`/divvy/${divvyId}/transactions/${transactionId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting transaction:", error.response ? error.response.data : "Network or other error");
    throw error;
  }
}