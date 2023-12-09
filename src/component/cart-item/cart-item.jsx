import { useState, useEffect } from "react";

import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

import { useContext } from "react";

import { Cart_Context } from "../../context/cart-context";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, id } = cartItem;

  const [item_properties, set_item_properties] = useState({
    quantity: 1,
    quantityMultipliedByPrice: price
  });

  const { deleteItemsFromCart,get_total_price } = useContext(Cart_Context);

  

  const increment_quantity = () => {
    const new_quantity = item_properties.quantity + 1
    const new_price = new_quantity * price
    set_item_properties(prev =>( {...prev, quantity: new_quantity, quantityMultipliedByPrice: new_price }));
  };

  const decrement_quantity = () => {
    if(item_properties.quantity === 1){
        return
    } else{
        const new_quantity = item_properties.quantity - 1
        const new_price = new_quantity * price
        set_item_properties(prev => ({...prev, quantity: new_quantity, quantityMultipliedByPrice: new_price}));
    }
  };

  
  useEffect(() => {
    get_total_price(id,item_properties.quantityMultipliedByPrice)
    //   second
    // }
  }, [item_properties.quantity])
  
// console.log(item_properties.quantityMultipliedByPrice)
  return (
    <section className=" my-3 h-52  shadow-lg">
      <div className="h-full   flex items-center gap-4">
        <div className="h-5/6  w-2/5">
          <img
            src={imageUrl}
            alt="some wears "
            className="h-full w-full rounded-lg"
          />
        </div>
        <div className="w-3/5 h-5/6  py-3 flex flex-col justify-around">
          <div className="flex ">
            <div className="w-4/5">
              <h4>{name}</h4>
              <p className="text-green-500">Free Delivery</p>
              <p className="font-bold text-xl">{price}</p>
            </div>
            <div className="w-1/5 flex justify-center ">
              <MdDeleteOutline
                size={40}
                onClick={() => deleteItemsFromCart(id)}
              />
            </div>
          </div>
          <div className="flex w-4/6 justify-between items-center ">
            <FiMinus
              size={40}
              className="border-4 rounded-full"
              onClick={decrement_quantity}
            />
            <p className="font-bold">{item_properties.quantity}</p>
            <IoIosAdd
              size={40}
              className="rounded-full border-4"
              onClick={increment_quantity}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
