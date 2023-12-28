import { useContext } from "react"

import {Product_Context} from '../../context/product-context'
import WishCArt from "../../component/wish-cart/wish-cart";

const WishList = () => {
    const {isLoading,fetched_products} = useContext(Product_Context)
    console.log(isLoading);
    // const {images} = fetched_products[0]

    return (
        <section>
            {
               fetched_products.length > 0 ? fetched_products.map(cart => (
                <WishCArt key={cart.id} wish_item={cart} />
               )) : <h1>Loading...</h1>
                
            }
            
        </section>
    )
}

export default WishList