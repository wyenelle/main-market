import './shop.css'

import Banner from '../../component/banner/banner'
import Featured_Category from '../../component/featured-category/featured-category'
import ProductsContainer from '../../component/products-container/products-container'
// import Mens_Category from '../../component/mens-category/mens-category'

const Shop = () => {
  return (
    <main className='container h-full px-4'>
            <Banner />
            <Featured_Category />
            <ProductsContainer/>
            {/* <Mens_Category /> */}
    </main>
  )
}

export default Shop