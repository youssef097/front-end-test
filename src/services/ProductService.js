import axios from "axios"
const URL = "https://front-test-api.herokuapp.com"
export async function getProducts() {
    try {
        const response = await axios.get(URL + "/api/product");
        return response.data;
    } catch (error) {
        return []
    }
}

export async function getProductData(id) {
    try {
        const response = await axios.get(URL + "/api/product/" + id);
        return response.data;
    } catch (error) {
        return []
    }
}
export async function addToCartAsync(body) {
    
    console.log(body);
    
    try {
        const response = await axios.post(URL + "/api/cart", body);
        return response.data;
    } catch (error) {
        return []
    }   
}

export  function addToCartPromise(body) {  

    return axios.post(URL + "/api/cart", body)
}