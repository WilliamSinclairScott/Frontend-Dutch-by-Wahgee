import api from './apiConnect';

//get all divvys
/**
 * 
 * @returns
 */
export async function getAllDivvys() {
  try {
    const response = await api.get('/divvy');
    return response.data;
  } catch (error) {
    console.error({
      "Error during get all divvys:": error.response ? error.response.data : "Network or other error"
    })
    throw error;
  }
}
//create a divvy
/**
 * 
 * @param {*} divvyData This is the data for the divvy
 * @returns This returns the response data from the server
 */
export async function createDivvy(divvyData) {
  try {
    const response = await api.post('/divvy', divvyData);
    return response.data
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
    const response = await api.get(`/divvy/${divvyId}`);
    return response.data;
  } catch (error) {
    console.error({
      "Error fetching divvy details:": error.response ? error.response.data : "Network or other error"
    })
    throw error;
  }
}
// Update a specific divvy by ID
/**
 * 
 * @param {*} divvyId This is the ID of the divvy
 * @param {*} divvyData This is the data for the divvy
 * @returns This returns the response data from the server
 */
export async function updateDivvy(divvyId, divvyData) {
  try {
    const response = await api.patch(`/divvy/${divvyId}`, divvyData);
    return response.data;
  } catch (error) {
    console.error("Error updating divvy:", error.response ? error.response.data : "Network or other error");
    throw error;
  }
}
// Delete a specific divvy by ID
/**
 * 
 * @param {*} divvyId This is the ID of the divvy
 * @returns This returns the response data from the server
 */
export async function deleteDivvy(divvyId) {
  try {
    const response = await api.delete(`/divvy/${divvyId}`);
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
    const response = await api.post(`/divvy/${divvyId}/transactions`, transactionData);
    return response.data;
  } catch (error) {
    console.error("Error creating transaction:", error.response ? error.response.data : "Network or other error");
    throw error;
  }
}
//update a transaction within a divvy
/**
 * 
 * @param {*} divvyId This is the ID of the divvy
 * @param {*} transactionId This is the ID of the transaction
 * @param {*} transactionData This is the data for the transaction
 * @returns This returns the response data from the server
 */
export async function updateTransaction(divvyId, transactionId, transactionData) {
  try {
    const response = await api.patch(`/divvy/${divvyId}/transactions/${transactionId}`, transactionData);
    return response.data;
  } catch (error) {
    console.error("Error updating transaction:", error.response ? error.response.data : "Network or other error");
    throw error;
  }
}
//delete a transaction within a divvy

export async function deleteTransaction(divvyId, transactionId) {
  try {
    const response = await api.delete(`/divvy/${divvyId}/transactions/${transactionId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting transaction:", error.response ? error.response.data : "Network or other error");
    throw error;
  }
}