import React, { useState, useRef, useContext } from "react";
// import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./index.css";

export default function ThumbnailsSwiper({ product }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const thumbnailsSlider = useRef();
  const thumbnailsNavigation = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    thumbnailsNavigation.current.swiper.slideTo(index);
    thumbnailsSlider.current.swiper.slideTo(index);
  };

  return (
    <div className="product-thumbnails">
      <span className="product-thumbnails-badge">-28%</span>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        navigation={false}
        slidesPerGroup={1}
        loop
        modules={[Navigation]}
        className="product-thumbnails-slider"
        ref={thumbnailsSlider}
      >
        <SwiperSlide>
          <div className="product-thumbnails-slider-item">
            <InnerImageZoom
              // zoomType="hover"
              // zoomScale={1}
              src={product.image}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-thumbnails-slider-item">
            <InnerImageZoom
              // zoomType="hover"
              // zoomScale={1}
              src={product.image}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-thumbnails-slider-item">
            <InnerImageZoom
              // zoomType="hover"
              // zoomScale={1}
              src={product.image}
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        navigation={true}
        slidesPerGroup={1}
        modules={[Navigation]}
        className="product-thumbnails-navigation"
        ref={thumbnailsNavigation}
      >
        <SwiperSlide>
          <div className={`product-thumbnails-navigation-item ${slideIndex === 0 && "active"}`}>
            <img
              // zoomType="hover"
              // zoomScale={1}
              src={product.image}
              onClick={() => goto(0)}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`product-thumbnails-navigation-item ${slideIndex === 1 && "active"}`}>
            <img
              // zoomType="hover"
              // zoomScale={1}
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-46.jpg"
              onClick={() => goto(1)}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`product-thumbnails-navigation-item ${slideIndex === 2 && "active"}`}>
            <img
              // zoomType="hover"
              // zoomScale={1}
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-34.jpg"
              onClick={() => goto(2)}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
