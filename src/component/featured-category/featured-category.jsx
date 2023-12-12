import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./featured-category.css";

import PRODUCTS from "../../shop-data.json";

const Featured_Category = () => {
  const reversed_array = [...PRODUCTS].reverse();

  return (
    <section className="h-52  flex flex-col mt-2  justify-center gap-3 ">
      <h3 className="">Featured Category</h3>

      <Swiper
        spaceBetween={30}
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
        }}
        modules={[]}
        className="h-3/5  w-full "
      >
        {reversed_array.map((product) => (
          <SwiperSlide
            key={product.id}
            className="h-full border-2   w-3/4 rounded-xl "
          >
            <img
              src={product.imageUrl}
              alt="some image"
              className="w-full rounded-xl h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Featured_Category;
