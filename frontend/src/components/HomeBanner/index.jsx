// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

import "./index.css";

export default function HomeBanner() {
  return (
      <div className="home-banner">
        <div className="blank-div"></div>
        <Swiper
          slidesPerView={1}
          // spaceBetween={20}
          // navigation={true}
          pagination={true}
          loop={true}
          modules={[Navigation, Autoplay, Pagination]}
          // autoplay={{
          //   delay: 2500,
          //   // disableOnInteraction: false,
          // }}
         
        >
          <SwiperSlide className="banner-item">
              <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-1.jpg" />
          </SwiperSlide>
          <SwiperSlide className="banner-item">
              <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-2.jpg" />
          </SwiperSlide>
          <SwiperSlide className="banner-item">
              <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-3.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
  );
}
