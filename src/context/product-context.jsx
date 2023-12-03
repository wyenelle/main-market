import { createContext,useState } from "react";

import PRODUCTS from '../shop-data.json'

export const Product_Context = createContext()

export const Product_Context_Provider = ({children}) => {
    const [products,setProducts] = useState(PRODUCTS)
    const value = {products}
    
    return (
        <Product_Context.Provider value={value}>
            {children}
        </Product_Context.Provider>
    )
}