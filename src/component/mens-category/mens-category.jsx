import { useContext } from "react";

import { Product_Context } from "../../context/product-context";
import FetchedProductCard from "../product-card/product-card-2";

const Mens_Category = () => {
  const { fetched_products } = useContext(Product_Context);

  return (
    <section>
      <h2>Men's Category</h2>

      <div className="grid grid-cols-2  p-1 gap-3">

        {fetched_products.length > 0 ? (
          fetched_products
            .filter((product) => product.category === "mens-shirts")
            .map((product, index) => {
              if (index >= 4) {
                return;
              } else {
                return (
                  <FetchedProductCard
                    product_object={product}
                    key={product.id}
                  />
                );
              }
            })
        ) : (
          <h1>Loading.....</h1>
        )}
        
      </div>
    </section>
  );
};

export default Mens_Category;
