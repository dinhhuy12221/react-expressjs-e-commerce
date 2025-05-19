import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import "./index.css";

export default function HomeCat() {
  const [itemBg, setItemBg] = useState([
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#ecffec",
    "#feefea",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#ecffec",
    "#feefea",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#ecffec",
    "#feefea",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
  ]);
  const [numberOfItems, setNumberOfItems] = useState(10);

  useEffect(() => {
    const handleNumberOfItems = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth > 1300) {
        setNumberOfItems(10)
      } else if (windowWidth > 800) {
        setNumberOfItems(6)
      } else {
        setNumberOfItems(4)
      }
    };
    window.addEventListener("resize", handleNumberOfItems);

    return () => {
      window.removeEventListener("resize", handleNumberOfItems);
    };
  }, []);

  return (
    <section className="homeCat">
      <div className="container">
        <h3 className="mb-3 hd">Featured Categories</h3>
        <Swiper
          slidesPerView={numberOfItems}
          slidesPerGroup={1}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {itemBg?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className="item text-center cursor"
                  style={{ background: item }}
                >
                  <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-13.png"></img>
                  <h6>Cafe & Milk</h6>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
