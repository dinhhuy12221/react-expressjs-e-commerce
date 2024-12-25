import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import './index.css'

export default function HomeBanner() {
  return (
    <div className="container mt-2">
      <div className="homeBannerSection">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={true}
          loop={false}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item">
              <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-1.jpg"
                className="w-100"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-2.jpg"
                className="w-100"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-3.jpg"
                className="w-100"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-2.jpg"
                className="w-100"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
