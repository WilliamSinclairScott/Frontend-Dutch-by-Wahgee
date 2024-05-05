import api from './apiConnect';
import  { useNavigate } from 'react-router-dom';
import { getUserId } from '../SessionStorage/fromSession';
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




/**
 * @param DATA object with the following properties:
 * @param {*} divvyName String
 * @param {*} owner _id of the user, $oid
 * @param {*} participants [...String]
 * @returns Success message, or error message
 */
export async function createDivvy(DATA) {
  console.log("DATA", DATA)
    try {
      if (DATA.divvyName === '') {
        console.error("Invalid data provided to create divvy");
        console.log("The problem is that the divvy name is empty, the owner is not the current user, or there are no participants");
        return;
      }
      if(DATA.owner !== getUserId()){
        console.error("Invalid data provided to create divvy");
        console.log("The problem is that the owner is not the current user");
        return;
      }
      if(DATA.participants.length === 0){
        console.error("Invalid data provided to create divvy");
        console.log("The problem is that there are no participants");
        return;
      }
      const divvyData = {
        "divvyName" : DATA.divvyName,
        "owner" : DATA.owner,
        "participants" : DATA.participants
      }
      const response = await api.post('/divvy', divvyData);
      //intercepter logic
      console.log("Divvy created!", response.data)
    } catch (error) {
      console.error("Error during create divvy:", error.response ? error.response.data : "Network or other error")
      throw error
    }
}




/**
 * @param DATA object with the following properties:
 * @param {*} divvyName String
 * @param {*} owner _id of the user, $oid
 * @param {*} participants [...String]
 * @returns Success message, or error message
 */
export async function updateDivvy(DATA) {
  console.log("DATA", DATA)
  try {
  if (DATA.divvyName === '') {
    console.error("Invalid data provided to create divvy");
    console.log("The problem is that the divvy name is empty, the owner is not the current user, or there are no participants");
    return;
  }
  if(DATA.owner !== getUserId()){
    console.error("Invalid data provided to create divvy");
    console.log("The problem is that the owner is not the current user");
    return;
  }
  if(DATA.participants.length === 0){
    console.error("Invalid data provided to create divvy");
    console.log("The problem is that there are no participants");
    return;
  }
  if(DATA.divvyId === ''){
    console.error("Invalid data provided to create divvy");
    console.log("The problem is that there is no divvyId");
    return;
  }
  const divvyData = {
    "divvyName" : DATA.divvyName,
    "owner" : DATA.owner,
    "participants" : DATA.participants
  }
    const response = await api.patch(`/divvy/${DATA.divvyId}`, divvyData);
    console.log("Divvy updated!", response.data)
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
export async function deleteDivvy(divvyId) {
  try {
    const response = await api.delete(`/divvy/${divvyId}`);
    console.log("Divvy deleted!", response.data)
  } catch (error) {
    console.error("Error deleting divvy:", error.response ? error.response.data : "Network or other error");
    throw error;
  }
}



/**
 * @param {Object} DATA object with the following properties:
 * @param {_id} divvyId This is the ID of the divvy
 * @param {string} transactionName Name of transaction
 * @param {number} amount number
 * @param {string} paidBy name of user
 * @param {enum} type expense or reimbursement or refund
 * @param {Array} breakdown [{name: String, amount: number}]
 * @returns This returns the response data from the server
 */
export async function createTransaction(DATA) {
  try {
  console.log("DATA", DATA)
  if (DATA.transactionName === '' ){
    console.error("No data provided to create divvy")
    return
  }
  if (DATA.amount === '' ){
    console.error("No data provided to create divvy")
    return
  }
  if (DATA.paidBy === '' ){
    console.error("No data provided to create divvy")
    return
  }
  if (DATA.type === '' ){
    console.error("No data provided to create divvy")
    return
  }
  if (DATA.divvyId === '' ){
    console.error("No data provided to create divvy")
    return
  }
  if (typeof DATA.breakdown === 'undefined'){
    console.error("No data provided to create divvy")
    return
  }
  const transactionData = {
    "transactionName" : DATA.transactionName,
    "amount" : DATA.amount,
    "paidBy" : DATA.paidBy,
    "type" : DATA.type,
    "breakdown" : DATA.breakdown
  }
    const response = await api.post(`/divvy/${DATA.divvyId}/transaction`, transactionData);
    return response.data;
  } catch (error) {
    console.error("Error creating transaction:", error.response ? error.response.data : "Network or other error");
    throw error;
  }
}



/**
 * @param {*} DATA object with the following properties:
 * @param {_id} divvyId This is the ID of the divvy
 * @param {_id} transactionId This is the ID of the transaction
 * @param {Object} DATA object with the following properties:
 * @param {string} transactionName Name of transaction
 * @param {number} amount number
 * @param {string} paidBy name of user
 * @param {enum} type expense or reimbursement or refund
 * @param {Array} breakdown [{name: String, amount: number}]
 * @returns This returns the response data from the server
 */
export async function updateTransaction(DATA) {
  try {
    console.log("DATA", DATA)
    if (DATA.transactionName === '' ){
      console.error("transactionName will not be updated")
    }
    if (DATA.amount === '' ){
      console.error("amount will not be updated")
    }
    if (DATA.paidBy === '' ){
      console.error("paidBy will not be updated")
    }
    if (DATA.type === '' ){
      console.error("type will not be updated")
    }
    if (DATA.transactionId === '' ){
      console.error("transactionId needs to be provided")
      return
    }
    if (DATA.divvyId === '' ){
      console.error("divvyId needs to be provided")
      return
    }
    // eslint-disable-next-line valid-typeof
    if (typeof DATA.breakdown.length === 0){
      console.error("Breakdown Required even if no changes")
      return
    }

    const transactionData = {
      "transactionName" : DATA.transactionName !== '' ? DATA.transactionName : null,
      "amount" : DATA.amount !== '' ? DATA.amount : null,
      "paidBy" : DATA.paidBy !== '' ? DATA.paidBy : null,
      "type" : DATA.type !== '' ? DATA.type : null,
      "breakdown" : DATA.breakdown
    }

    Object.keys(transactionData).forEach(key => {
      if (transactionData[key] === null) {
        delete transactionData[key];
      }
    });
    console.log("transactionData", transactionData)
    const response = await api.patch(`/divvy/${DATA.divvyId}/transaction/${DATA.transactionId}`, transactionData);
    return response.data;

    } catch (error) {
      console.error("Error creating transaction:", error.response ? error.response.data : "Network or other error");
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