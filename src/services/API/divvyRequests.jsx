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
export async function createDivvy(divvyData) {
  try {
    const response = await api.post('/divvy', divvyData);
    return response.data
  } catch (error) {
    console.error("Error during create divvy:", error.response ? error.response.data : "Network or other error")
    throw error
  }
}

