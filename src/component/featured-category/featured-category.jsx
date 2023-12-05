
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


const Featured_Category = () => {
    return(
        <section className='h-52 border-4 border-red-500 flex flex-col gap-3 justify-center'>
            <h3 className=''>Featured Category</h3>
             <Swiper 
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination]}
                className='h-3/5 border-4 border-blue-500 w-full'
            >
                <SwiperSlide className='h-full border-4 border-green-500'>Slide 1</SwiperSlide>
                <SwiperSlide className='h-full border-4 border-green-500'>Slide 2</SwiperSlide>
                <SwiperSlide className='h-full border-4 border-green-500'>Slide 3</SwiperSlide>
                <SwiperSlide className='h-full border-4 border-green-500'>Slide 4</SwiperSlide>
                <SwiperSlide className='h-full border-4 border-green-500'>Slide 5</SwiperSlide>
                <SwiperSlide className='h-full border-4 border-green-500'>Slide 6</SwiperSlide>
                <SwiperSlide className='h-full border-4 border-green-500'>Slide 7</SwiperSlide>
                <SwiperSlide className='h-full border-4 border-green-500'>Slide 8</SwiperSlide>
                <SwiperSlide className='h-full border-4 border-green-500'>Slide 9</SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Featured_Category