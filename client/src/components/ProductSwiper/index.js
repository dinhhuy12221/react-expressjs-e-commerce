import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import ProductItem from "../ProductItem";
import "./index.css";

const productList = Array(10).fill(<ProductItem />);

export default function ProductSwiper(props) {
  const [numberOfProductSwiper, setNumberOfProductSwiper] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth > 800) {
        setNumberOfProductSwiper(4);
      } else {
        setNumberOfProductSwiper(2);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="product-row mt-4">
      <div className="d-flex align-items-center">
        <div className="info w-75">
          <h5 className="mb-2">{props.title}</h5>
        </div>
      </div>
      <Swiper
        slidesPerView={numberOfProductSwiper}
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
