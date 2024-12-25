import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

import ProductItem from '../../../components/ProductItem';
export default function RelatedProducts(props) {
  return (
    <>
      <div className="product_row w-100 mt-4">
      <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h5 className="mb-2">{props.title}</h5>
                </div>
              </div>
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  navigation={true}
                  modules={[Navigation]}
                  pagination={{
                    clickable: true,
                  }}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>
                </Swiper>
              </div>
    </>
  )
}
