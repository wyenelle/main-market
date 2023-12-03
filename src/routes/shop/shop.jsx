import './shop.css'
import { useContext } from 'react'

import {Product_Context} from '../../context/product-context.jsx'

import Banner from '../../component/banner/banner'

const Shop = () => {
  const {products} = useContext(Product_Context)
  // console.log(products)
  
  return (
    <main className='container h-full px-4'>
        <section className='h-1/3'>
            <Banner />
        </section>
    </main>
  )
}

export default Shop