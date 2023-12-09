import {useContext} from 'react'

import {Cart_Context} from '../../context/cart-context'

const SubTotal = () => {
  const {totalCartObject} = useContext(Cart_Context)
  const total = Object.values(totalCartObject).reduce((acc,val) => acc + val, 0)
  return (
      <div className="w-full">
        <h1 className=" text-2xl font-bold">Subtotal: {total} </h1>
        <p className="text-green-500">
          {" "}
          Your order are eligible for free delivery
        </p>
      </div>
  );
};

export default SubTotal;
