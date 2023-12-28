import { createContext,useEffect,useState } from "react";

import PRODUCTS from '../shop-data.json'

export const Product_Context = createContext()
const products_array = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting"
  ]
export const Product_Context_Provider = ({children}) => {
    const [products,setProducts] = useState(PRODUCTS)
    const [fetched_products,set_new_cart] = useState([])
    const [isLoading,setIsLoading] = useState(true)


    const value = {products,setProducts,fetched_products,isLoading}
    useEffect(() => {
        const fetchData = async () => {
            try{

                const data = await fetch('https://dummyjson.com/products/?limit=0')
                const {products} = await data.json()
                
                set_new_cart(products)
                setIsLoading(false)
                console.log(products);
                console.log(isLoading);
            } catch(e){
                console.log(e)
            }
        }
        fetchData() 
    },[])
    return (
        <Product_Context.Provider value={value}>
            {children}
        </Product_Context.Provider>
    )
}