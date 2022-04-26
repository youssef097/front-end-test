import { createContext, useContext, useEffect, useState } from "react";
import { addToCartPromise, getProducts } from "../services/ProductService";
import useLocalStorage from "../hooks/useLocalStorage"
import React from "react";
const productContext = createContext()

export const useProducts = () => {
    const context = useContext(productContext)
    if (!context) throw new Error("Product provider is missing!")
    return context
}

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useLocalStorage("cartItems", 0);

    useEffect(() => {
        (async () => {
            const savedProducts = JSON.parse(localStorage.getItem("products"));
            const now = new Date();
            if (savedProducts && parseInt(savedProducts.expiresAt) > now.getTime()) {
                console.log("Getting Products from Cache");
                setProducts(savedProducts.data);
            } else {
                console.log("Getting Products from API");
                const data = await getProducts();
                const inOneHour = new Date(new Date().getTime() + 60 * 60 * 1000);
                localStorage.setItem('products', JSON.stringify({ expiresAt: inOneHour.getTime(), data }))
                setProducts(data);
            }
        })();
    }, []);


    const addToCart = (body, productData) => {
        return addToCartPromise(body).then(({ data }) => {
            if (data.count) {
                setCartItems(cartItems + data.count)
            }
        })
    }


    return (
        <productContext.Provider value={{ products, cartItems, getProducts, addToCart }}>
            {children}
        </productContext.Provider>
    )
}