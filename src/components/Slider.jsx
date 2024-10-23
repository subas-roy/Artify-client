// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';

const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => {
        // console.log(swiper)
      }}
      onSlideChange={() => {
        // console.log('slide change')
      }}
      loop={true}
    >
      <SwiperSlide>
        <img className='relative' src="https://i.ibb.co.com/JpRbkJc/HP-slide-2-new-2-large.jpg" alt="" />
        <div className='absolute left-1/4 top-[75%] text-center text-white'>
          <h2 className="title text-5xl" data-swiper-parallax="-300">
            Discover Art You Love
          </h2>
          <div className="subtitle text-2xl" data-swiper-parallax="-200">
            Browse Collections Updated Daily
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co.com/NSQ7spL/hybrid-hero-slide3-large.jpg" alt="" />
        <div className='absolute left-1/4 top-[75%] text-center text-white'>
          <h2 className="title text-5xl" data-swiper-parallax="-300">
            New This Week
          </h2>
          <div className="subtitle text-2xl" data-swiper-parallax="-200">
            Browse Collections Updated Daily
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co.com/r7hmSY0/hp-hero-slide1-1-large.jpg" alt="" />
        <div className='absolute left-1/4 top-[75%] text-center text-white'>
          <h2 className="title text-5xl" data-swiper-parallax="-300">
            New This Week
          </h2>
          <div className="subtitle text-2xl" data-swiper-parallax="-200">
            Browse Collections Updated Daily
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;