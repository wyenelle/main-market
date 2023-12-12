import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import './featured-category.css'

const Featured_Category = () => {
  return (
    <section  className="h-52  flex flex-col  justify-center gap-3 ">
      <h3 className="">Featured Category</h3>
      
      <Swiper 
                spaceBetween={30}
                slidesPerView = {'auto'}
                pagination={{
                    clickable: true
                }}
                modules={[]}
                className='h-3/5  w-full '
            >
                <SwiperSlide className='h-full border-2  w-3/4 rounded-xl '>Slide 1</SwiperSlide>
                <SwiperSlide className='h-full border-2  w-3/4 rounded-xl '>Slide 2</SwiperSlide>
                <SwiperSlide className='h-full border-2  w-3/4 rounded-xl '>Slide 3</SwiperSlide>
                <SwiperSlide className='h-full border-2  w-3/4 rounded-xl '>Slide 4</SwiperSlide>
                <SwiperSlide className='h-full border-2  w-3/4 rounded-xl '>Slide 5</SwiperSlide>
                <SwiperSlide className='h-full border-2  w-3/4 rounded-xl '>Slide 6</SwiperSlide>
                <SwiperSlide className='h-full border-2  w-3/4 rounded-xl '>Slide 7</SwiperSlide>
                <SwiperSlide className='h-full border-2  w-3/4 rounded-xl '>Slide 8</SwiperSlide>
                <SwiperSlide className='h-full border-2  w-3/4 rounded-xl '>Slide 9</SwiperSlide>
            </Swiper>
    </section>
  );
};

export default Featured_Category;
