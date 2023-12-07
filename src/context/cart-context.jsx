import { createContext, useState } from "react";

export const Cart_Context = createContext({
  cartItems: [],
  addItemsToCart: () => {},
});

let total = 0

export const Cart_Context_Provider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCartPrice,setTotalCartPrice] = useState(total)

  const unique_cart_items = new Set(cartItems);
  let price_object = {}
//    this function adds products to the cart
  const addItemToCart = (product_object) => {
    unique_cart_items.add(product_object);
    setCartItems([...unique_cart_items]);
  };
//   console.log(cartItems);

//    deletes items from cart
  const deleteItemsFromCart = (product_to_delete) => {
    const filtered_array = cartItems.filter(
      (item) => item.id !== product_to_delete
    );
    setCartItems(filtered_array);
  };

  const get_total_price = (id, new_price) => {
        // console.log(id,new_price)
        price_object = {...price_object, [id]: new_price};
        total =Number(Object.values(price_object).reduce((acc,val) => acc + val))
        setTotalCartPrice(total);
        
  }

  const value = { cartItems, addItemToCart, deleteItemsFromCart,totalCartPrice,get_total_price};
  return (
    <Cart_Context.Provider value={value}>{children}</Cart_Context.Provider>
  );
};
