import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar, EffectFlip, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import { Link } from 'react-router-dom';

const ContentSlider = () => {
  const isSmallScreen = window.innerWidth <= 767;

  return (
    <Swiper
      modules={[Pagination, Navigation, Scrollbar, EffectFlip, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={!isSmallScreen} 
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      effect="flip"
      autoplay={{ delay: 250000 }} 
      loop={true} 
    >
      <SwiperSlide>
        <div className="relative" id="backimage">
          <div className="text-class" id="text-slide1">
            <h6 className="">The latest product from ecoshop</h6>
            <h5 className="money-1">
              <span id="money">$ </span>299
            </h5>
            <h1 className="">FEATURED </h1>
            <h1 className=""> CYCLE</h1>
            <Link to="/shop">
              <button className="shop-1">Shop Now</button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative" id="backimg">
          <div className="text-class" id="text-slide2">
            <h6>The latest product from ecoshop</h6>
            <h1>LOOK BEAUTIFUL</h1>
            <h1> THIS SEASON</h1>
            <div className="d-flex justify-content-center align-items-center gap-4">
              <Link to="/shop">
                <button className="shop-1">Shop Now</button>
              </Link>
              <h5>
                <span id="money">$</span>299
              </h5>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ContentSlider;
