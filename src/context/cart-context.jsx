import { createContext, useState } from "react";

export const Cart_Context = createContext({
  cartItems: [],
  addItemsToCart: () => {},
});


export const Cart_Context_Provider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCartObject,setTotalCartObject] = useState({})

  const unique_cart_items = new Set(cartItems);

//    this function adds products to the cart
  const addItemToCart = (product_object) => {
    unique_cart_items.add(product_object);
    setCartItems([...unique_cart_items]);
  };

//    deletes items from cart
  const deleteItemsFromCart = (product_to_delete) => {
    const filtered_array = prev => prev.filter(item => item.id !== product_to_delete)
    setCartItems(filtered_array);
    setTotalCartObject(prev => ({...prev, [product_to_delete]: 0}))
  };


  const get_total_price = (id, new_price) => {
    setTotalCartObject(prev => ({...prev, [id]: new_price}))
  }   
  
  // console.log(totalCartObject)

  const value = { cartItems, addItemToCart, deleteItemsFromCart,totalCartObject,get_total_price};
  return (
    <Cart_Context.Provider value={value}>{children}</Cart_Context.Provider>
  );
};
 