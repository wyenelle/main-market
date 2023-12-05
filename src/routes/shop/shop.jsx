import './shop.css'
import { useContext } from 'react'

import {Product_Context} from '../../context/product-context.jsx'
import {Cart_Context} from '../../context/cart-context.jsx'

import Banner from '../../component/banner/banner'
import Featured_Category from '../../component/featured-category/featured-category'

const Shop = () => {
  const {products} = useContext(Product_Context)
  const {addItemToCart} = useContext(Cart_Context)
  // console.log(addItemToCart)
  
  return (
    <main className='container h-full px-4'>
            <Banner />
            <Featured_Category />
            <div>
              {
                products.map(product => (
                  <div key={product.id} onClick={() => addItemToCart(product)}>
                    <img src={product.imageUrl} />
                      <h3>{product.name}</h3>
                  </div>
                ))

              }
            </div>
    </main>
  )
}

export default Shop