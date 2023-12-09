import {useContext} from 'react'

import {Cart_Context} from '../../context/cart-context'

const SubTotal = () => {
  const {totalCartObject,cartItems} = useContext(Cart_Context)
  const total = Object.values(totalCartObject).reduce((acc,val) => acc + val, 0)
  const number_if_items = cartItems.length
  return (
      <div className="w-full">
        <h1 className=" text-2xl font-bold">Subtotal: {total} </h1>
        <p className="text-green-500 mt-2">
          {" "}
          {`You have ${number_if_items ||'no'} ${number_if_items > 1 ? 'items' : 'item' } in your cart`}
        </p>
      </div>
  );
};

export default SubTotal;
