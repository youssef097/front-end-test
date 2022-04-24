import axios from "axios"
const URL = "https://front-test-api.herokuapp.com"
export async function getProducts(){
    try {
        const response = await axios.get(URL+"/api/product");        
        return response.data;
    } catch (error) {
        return []
    }
}