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
export async function updateDivvy(divvyId, divvyData) {
  try {
    const response = await api.patch(`/divvys/${divvyId}`, divvyData);
    return response.data;
  } catch (error) {
    console.error("Error updating divvy:", error.response ? error.response.data : "Network or other error");
    throw error;
  }
}
// Delete a specific divvy by ID
export async function deleteDivvy(divvyId) {
  try {
    const response = await api.delete(`/divvys/${divvyId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting divvy:", error.response ? error.response.data : "Network or other error");
    throw error;
  }
}
// Create a transaction within a divvy
export async function createTransaction(divvyId, transactionData) {
  try {
    const response = await api.post(`/divvys/${divvyId}/transactions`, transactionData);
    return response.data;
  } catch (error) {
    console.error("Error creating transaction:", error.response ? error.response.data : "Network or other error");
    throw error;
  }
}