import CartItem from "../../component/cart-item/cart-item";
import { useContext } from "react";

import { Cart_Context } from "../../context/cart-context";
import "./cart.css";
import SubTotal from "../../component/subtotal/subtotal";

const Cart = () => {
  const { cartItems } = useContext(Cart_Context);
  // console.log(cartItems);
  return (
    <section className="px-3 cart">
      <SubTotal />

      <div className="cart-items-container overflow-scroll">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
    </section>
  );
};

export default Cart;
