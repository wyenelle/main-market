import { Product_Context } from "../../context/product-context.jsx";
import { Cart_Context } from "../../context/cart-context.jsx";

import { useContext, useState } from "react";

import ProductCard from "../product-card/product-card.jsx";

const ProductsContainer = () => {
  const { products } = useContext(Product_Context);
  const { addItemToCart } = useContext(Cart_Context);
  const [filtered_array, set_filtered_array] = useState(products);

  const filtered_products = (e) => {
    switch (e.target.innerText.toLowerCase()) {
      case "all":
        {
          set_filtered_array(products);

          //   add styles to the All btn
          const all_btn = document.getElementById("all");
          all_btn.classList.remove("text-gray-500");
          all_btn.classList.add("font-black", "text-black");

          //   remove styles from other buttons
          const men_btn = document.getElementById("men");
          men_btn.classList.remove("font-black", "text-black");
          men_btn.classList.add("text-gray-500");

          const women_btn = document.getElementById("women");
          women_btn.classList.remove("font-black", "text-black");
          women_btn.classList.add("text-gray-500");
        }
        break;
      case "men":
        {
          set_filtered_array(
            products.filter((product) => product.sex === "men")
          );
          //   add stles to Men button if clicked
          const men_btn = document.getElementById("men");
          men_btn.classList.remove("text-gray-500");
          men_btn.classList.add("font-black", "text-black");

          //   remove styles from the other buttons
          const all_btn = document.getElementById("all");
          all_btn.classList.remove("font-black", "text-black");
          all_btn.classList.add("text-gray-500");

          const women_btn = document.getElementById("women");
          women_btn.classList.remove("font-black", "text-black");
          women_btn.classList.add("text-gray-500");
        }
        break;
      case "women":
        {
          set_filtered_array(
            products.filter((product) => product.sex === "women")
          );
          //   add styles to buttonif clicked
          const women_btn = document.getElementById("women");
          women_btn.classList.remove("text-gray-500");
          women_btn.classList.add("font-black", "text-black");

          // remove styles from the other buttons
          const all_btn = document.getElementById("all");
          all_btn.classList.remove("font-black", "text-black");
          all_btn.classList.add("text-gray-500");

          const men_btn = document.getElementById("men");
          men_btn.classList.remove("font-black", "text-black");
          men_btn.classList.add("text-gray-500");
        }
        break;
      default:
        console.log("no match");
        break;
    }
  };

  return (
    <section>
      <div className="flex gap-5 h-14">
        <button
          onClick={filtered_products}
          id="all"
          className=" p-2 font-black outline-none  text-black"
        >
          {" "}
          All{" "}
        </button>
        <button
          onClick={filtered_products}
          id="men"
          className=" p-2 font-semibold outline-none text-gray-500 "
        >
          {" "}
          Men{" "}
        </button>
        <button
          onClick={filtered_products}
          id="women"
          className=" p-2 font-semibold outline-none text-gray-500 "
        >
          {" "}
          Women{" "}
        </button>
      </div>
      <div className="grid grid-cols-2  p-1 gap-3">
        {filtered_array.map((product, index) => {
          if (index >= 4) {
            return;
          } else {
            return (
              <ProductCard product_object={product} key={product.id} />
            );
          }
        })}
      </div>
    </section>
  );
};

export default ProductsContainer;
