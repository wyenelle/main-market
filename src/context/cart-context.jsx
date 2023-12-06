import { createContext, useState } from "react";

export const Cart_Context = createContext({
  cartItems: [],
  addItemsToCart: () => {},
});

export const Cart_Context_Provider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const unique_cart_items = new Set(cartItems);

  const addItemToCart = (product_object) => {
    unique_cart_items.add(product_object);
    setCartItems([...unique_cart_items]);
  };
  console.log(cartItems);

  const deleteItemsFromCart = (product_to_delete) => {
    const filtered_array = cartItems.filter(
      (item) => item.id !== product_to_delete
    );
    setCartItems(filtered_array);
  };

  const value = { cartItems, addItemToCart, deleteItemsFromCart };
  return (
    <Cart_Context.Provider value={value}>{children}</Cart_Context.Provider>
  );
};
