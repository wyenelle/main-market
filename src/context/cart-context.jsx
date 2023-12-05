import {createContext,useState} from 'react' 


export const Cart_Context = createContext({
    cartItems: [],
    addItemsToCart:() => {}
})

export const Cart_Context_Provider = ( {children} ) => {
    const [cartItems,setCartItems] = useState([])
    const unique_cart_items = new Set(cartItems)
    
    const addItemToCart = (product_object) => {
        // console.log(product_object);
        unique_cart_items.add(product_object)
        setCartItems([...unique_cart_items])
        // setCartItems()
    }
console.log(cartItems)
    const value = {cartItems,addItemToCart}
    return(
        <Cart_Context.Provider value={value}>
            {children}
        </Cart_Context.Provider>
    )
}