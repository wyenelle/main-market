import CartImg from '../../assets/cart-img.svg'


const CartHeader = () => {
  return (
    <div className="h-full lg:h-[346px] w-full border-4 flex flex-col justify-center items-center gap-5">
        <img src={CartImg} alt="cart image" />
        <h3 className='text-[#0A4757] text-[20px] font-[700] leading-[120%]'>Your cart is empty</h3>
        <p className='text-[#818181] font-[400] w-[299px] text-[15px] leading-[160%] font-[400] text-center'>Browse our categories and discover our best deals!</p>
        <button className='w-[249px] mt-5 h-[52px] py-[10px]  px-[18px]'>Shop our products </button>
    </div>
  )
}

export default CartHeader