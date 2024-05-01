import api from './apiConnect';

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

