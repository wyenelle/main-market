import { FaHeart } from "react-icons/fa";

const FetchedProductCard = ({product_object}) => {
    const {price,title, thumbnail} = product_object
  return (
    <div  className=" h-66  relative">
      <img
        src={thumbnail}
        className="rounded-xl h-3/5 object-cover w-full"
      />
      <div className="grid  grid-cols-3  h-1/3">
        <h3 className="col-span-2 text-ellipsis   w-9/12  whitespace-nowrap truncate ... flex items-center">
          {title}
        </h3>
        <h2 className="  flex justify-center items-center text-xl">
          ${price}
        </h2>
        <button
          onClick={() => addItemToCart(product_object)}
          className="col-span-3 btn"
        >
          Add to Cart
        </button>
      </div>

      <FaHeart size={25} className="absolute top-2 right-2" />
    </div>
  )
}

export default FetchedProductCard