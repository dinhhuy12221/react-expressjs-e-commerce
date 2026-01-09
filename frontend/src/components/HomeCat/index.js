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
  const [numberOfItems, setNumberOfItems] = useState(8);

  useEffect(() => {
    const handleNumberOfItems = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth > 1300) {
        setNumberOfItems(8);
      } else if (windowWidth > 800) {
        setNumberOfItems(6);
      } else {
        setNumberOfItems(4);
      }
    };
    window.addEventListener("resize", handleNumberOfItems);

    return () => {
      window.removeEventListener("resize", handleNumberOfItems);
    };
  }, []);

  return (
      <section className="home-category">
        <Swiper
          slidesPerView={numberOfItems}
          slidesPerGroup={1}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          pagination={{
            clickable: true,
          }}
           
        >
          {itemBg?.map((item, index) => {
            return (
              <SwiperSlide className="category-item-wrapper" key={index}>
                <div
                  className="category-item"
                  style={{ background: item }}
                >
                  <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-13.png"></img>
                  <h6>Cafe & Milk</h6>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
  );
}
