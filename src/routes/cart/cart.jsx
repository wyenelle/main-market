import CartItem from '../../component/cart-item/cart-item'


const Cart = () => {
    return (
        <section>
            <h1>Cart Page</h1>
            {
                [].map(items => <CartItem cartItem={item} />)
            }
        </section>
    )
}

export default Cart