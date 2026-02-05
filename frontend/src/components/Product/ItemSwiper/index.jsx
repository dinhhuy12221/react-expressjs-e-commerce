import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Item from "../Item";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";

export default function ItemSwiper(props) {
  const [numberOfProductSwiper, setNumberOfProductSwiper] = useState(4);

  const productList = props.productList;

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
    <section className="product-swiper">
      <h3 className="">{props?.title}</h3>
      <Swiper
        slidesPerView={numberOfProductSwiper}
        spaceBetween={0}
        navigation={true}
        loop
        modules={[Navigation]}
        pagination={{
          clickable: true,
        }}
        className="product-swiper-list"
      >
        {productList.map(product => (
          <SwiperSlide >
            <Item key={product.id} product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
