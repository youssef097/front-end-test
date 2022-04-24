import { createContext, useContext, useEffect, useState } from "react";
import { addToCartPromise, getProducts } from "../services/ProductService";
import useLocalStorage from "../hooks/useLocalStorage"

const productContext = createContext()

export const useProducts = () =>{
    const context = useContext(productContext)
    if(!context) throw new Error("Product provider is missing!")
    return context
}

export const ProductProvider = ({children}) =>{
    const [products,setProducts] = useState([])
    const [cartItems, setCartItems] = useLocalStorage("cartItems",0);

    useEffect(() => {
        (async () => {
          const data = await getProducts();
          
          setProducts(data);
        })();
      }, []);
    
    const getProduct = async (id) =>{
        try {
            const res = await getProduct(id)
            return res.data;
        } catch (error) {
            
        }
    }
    const addToCart =  (body) =>{
        return  addToCartPromise(body).then(({data})=>{
            if(data.count){
                setCartItems(cartItems+data.count)
            }
        })        
    }
 
    
    return (
        <productContext.Provider value= {{products,cartItems, getProduct, getProducts, addToCart}}>
            {children}
        </productContext.Provider>
    )
}