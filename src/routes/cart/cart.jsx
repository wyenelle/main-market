import CartItem from "../../component/cart-item/cart-item";
import { useContext } from "react";

import { Cart_Context } from "../../context/cart-context";
import "./cart.css";
import SubTotal from "../../component/subtotal/subtotal";
import Button from "../../component/button/button";
import { calculate_total_cart_items } from "../../helper";

const Cart = () => {
  const { cartItems,totalCartObject } = useContext(Cart_Context);
  const total = calculate_total_cart_items(totalCartObject)

  return (
    <section className="px-3 cart relative">
      <SubTotal />

      <div className="cart-items-container overflow-scroll">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <div className="flex justify-center items-center absolute bottom-3 right-0 left-0 h-10  ">
          <Button text={total}/>
      </div>
    </section>
  );
};

export default Cart;
