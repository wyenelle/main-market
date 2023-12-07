import {useContext} from 'react'

import {Cart_Context} from '../../context/cart-context'

const SubTotal = () => {
  const {totalCartPrice} = useContext(Cart_Context)
  return (
      <div className="w-full">
        <h1 className=" text-2xl font-bold">Subtotal: {totalCartPrice} </h1>
        <p className="text-green-500">
          {" "}
          Your order are eligible for free delivery
        </p>
      </div>
  );
};

export default SubTotal;
