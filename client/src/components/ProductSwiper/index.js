import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import ProductItem from "../ProductItem";
import './index.css'

const productList = Array(10).fill(<ProductItem />);

export default function ProductSwiper(props) {
  return (
      <div className="product-row mt-4">
        <div className="d-flex align-items-center">
          <div className="info w-75">
            <h5 className="mb-2">{props.title}</h5>
          </div>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          navigation={true}
          loop
          modules={[Navigation]}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {productList &&
            productList.map((product, index) => {
              return <SwiperSlide key={index}>{product}</SwiperSlide>;
            })}
        </Swiper>
      </div>
  );
}
