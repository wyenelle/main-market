import {createContext,useState} from 'react' 


export const Cart_Context = createContext({
    cartItems: [],
    addItemsToCart:() => {}
})

export const Cart_Context_Provider = ( {children} ) => {
    const [cartItems,setCartItems] = useState([])
    const value = [cartItems]

    const addItemToCart = () => {
        
    }
    return(
        <Cart_Context.Provider value={value}>
            {children}
        </Cart_Context.Provider>
    )
}