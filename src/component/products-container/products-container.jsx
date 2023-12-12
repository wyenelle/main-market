import {Product_Context} from '../../context/product-context.jsx'
import {Cart_Context} from '../../context/cart-context.jsx'

import { useContext,useEffect, useState } from 'react'

import { FaHeart } from "react-icons/fa";

const ProductsContainer = () => {
    const {products,selected_category,setProducts} = useContext(Product_Context)
    const {addItemToCart} = useContext(Cart_Context)
    const [filtered_array,set_filtered_array] = useState(products)

    const filtered_products = (e) => {
        switch (e.target.innerText.toLowerCase()) {
            case 'all':
                set_filtered_array(products)
                break;
            case 'men': {
                 set_filtered_array(products.filter(product => product.sex === 'men' ))
            }
                break;
            case 'women': {
                 set_filtered_array(products.filter(product => product.sex === 'women' ))
                }
                break;
                default:
                    console.log('no match')
                    break;
                }
            }
    

    return(
        <section> 
            <div className='flex gap-2 justify-between  border-4 h-14'>
        
                <button onClick={filtered_products } className='border-2 p-2 font-semibold rounded-md'> All </button>
                <button onClick={filtered_products } className='border-2 p-2 font-semibold rounded-md'> Men </button>
                <button onClick={filtered_products } className='border-2 p-2 font-semibold rounded-md'> Women </button>

            </div>
            <div className='grid grid-cols-2  p-1 gap-3'>
                {
                    filtered_array.map(product => (
                    <div key={product.id}  className=' h-66  relative'>
                        <img src={product.imageUrl} className='rounded-xl h-3/5 w-full' />
                        <div className='grid  grid-cols-3  h-1/3'>
                            <h3 className='col-span-2 text-ellipsis flex items-center'>{product.name}</h3>
                            <h2 className='  flex justify-center items-center text-xl'>${product.price}</h2>
                            <button onClick={() => addItemToCart(product)} className='col-span-3 btn'>Add to Cart</button>
                        </div>

                            <FaHeart size={25} className='absolute top-2 right-2' />
                    </div>
                    ))

                }
              </div>
        </section>
    )
}

export default ProductsContainer