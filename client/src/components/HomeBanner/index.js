import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import './index.css'

export default function HomeBanner() {
  return (
    <div className="container mt-2">
      <div className="homeBannerSection">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={true}
          loop={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item">
              <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-1.jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-2.jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-3.jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-2.jpg"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
