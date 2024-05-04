import api from './apiConnect';
import  { useNavigate } from 'react-router-dom';
import { getDivvyDetails } from '../SessionStorage/fromSession';
/**
 * @param DATA object with the following properties:
 * @param {*} divvyName String
 * @param {*} owner _id of the user, $oid
 * @param {*} participants [...String]
 * @returns Success message, or error message
 */
export async function createDivvy(DATA) {
  console.log("DATA", DATA)
  if (!DATA){
    console.error("No data provided to create divvy")
  } else{
    //await resonse from api
    console.log("new Divvy made!")
    return true
  }
  return null
  try {
    const divvyData = {
      "divvyName" : DATA.divvyName,
      "owner" : DATA.owner,
      "participants" : DATA.participants
    }

    const response = await api.post('/divvy', divvyData);
    //intercepter logic
    return response.data
  } catch (error) {
    console.error("Error during create divvy:", error.response ? error.response.data : "Network or other error")
    throw error
  }
}

/**
 * get a specific divvy by ID
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
 * @param DATA object with the following properties:
 * @param {*} divvyName String
 * @param {*} owner _id of the user, $oid
 * @param {*} participants [...String]
 * @returns Success message, or error message
 */
export async function updateDivvy(DATA) {
  console.log("DATA", DATA)
  if (!DATA){
    console.error("No data provided to create divvy")
  } else{
    //await resonse from api
    console.log("Update Divvy made!")
    return true
  }
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
 * @param {*} DATA object with the following properties:
 * @param {*} transactionName Name of transaction
 * @param {*} amount number
 * @param {*} paidBy name of user
 * @param {*} type expense or reimbursement or refund
 * @returns This returns the response data from the server
 */
export async function createTransaction(DATA) {
  console.log("DATA", DATA)
  if (!DATA){
    console.error("No data provided to create divvy")
  } else{
    //await resonse from api
    console.log("new Transaction made!")
    return true
  }
  return null
  try {
    const response = await api.post(`/divvy/${divvyId}/transactions`, transactionData);
    return response.data;
  } catch (error) {
    console.error("Error creating transaction:", error.response ? error.response.data : "Network or other error");
    throw error;
  }
}
// update a transaction within a divvy
/**
 * @param {*} DATA object with the following properties:
 * @param {*} transactionName Name of transaction
 * @param {*} amount number
 * @param {*} paidBy name of user
 * @param {*} type expense or reimbursement or refund
 * @returns This returns the response data from the server
 */
export async function updateTransaction(DATA) {
  console.log("DATA", DATA)
  if (!DATA){
    console.error("No data provided to create divvy")
  } else{
    //await resonse from api
    console.log("update Transaction made!")
    return true
  }
  return null
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