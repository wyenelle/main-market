

const CartItem = ({cartItem}) => {
    const {name,quantity} = cartItem
    return(
        <div>
            <h1>{name}</h1>
            <p>{quantity}</p>
        </div>
    )
}

export default CartItem