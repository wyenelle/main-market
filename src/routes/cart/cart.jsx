import CartItem from "../../component/cart-item/cart-item";
import { useContext } from "react";

import { Cart_Context } from "../../context/cart-context";
import "./cart.css";
import SubTotal from "../../component/subtotal/subtotal";
import Button from "../../component/button/button";

const Cart = () => {
  const { cartItems,totalCartObject } = useContext(Cart_Context);
  const total = Object.values(totalCartObject).reduce((acc,val) => acc + val ,0)

  return (
    <section className="px-3 cart relative">
      <SubTotal />

      <div className="cart-items-container overflow-scroll">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <div className="flex justify-center absolute bottom-0 right-0 left-0 h-13  ">
          <Button total={total}/>
      </div>
    </section>
  );
};

export default Cart;
