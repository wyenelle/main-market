

const CartItem = ({cartItem}) => {
    const {name,imageUrl,price} = cartItem
    return(
        <section className="">
            <div className="h-40   flex items-center gap-4">
                <div className="h-5/6  w-2/5">
                    <img src={imageUrl} alt='some wears ' className="h-full w-full rounded-lg" />
                </div>
                <div className="w-3/5 h-5/6  py-3">
                    <h4>{name}</h4>
                    <p className="text-green-500">Free Delivery</p>
                    <p>{price}</p>
                </div>
            </div>
        </section>
    )
}

export default CartItem