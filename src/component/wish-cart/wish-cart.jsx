import React from 'react'

const WishCArt = ({wish_item}) => {
    const {category,price,thumbnail} = wish_item
  return (
    <div className='mb-5'>
        <h1 className='text-2xl'>{category}</h1>
        <img src={thumbnail} alt='product' />
        <p>{price}</p>
    </div>
  )
}

export default WishCArt