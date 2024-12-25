import React from "react";
import HomeBanner from "../../components/HomeBanner";
import Button from "@mui/material/Button";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import ProductItem from "../../components/ProductItem";
import HomeCat from "../../components/HomeCat";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeCat />
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky-top">
                <div className="banner">
                  <img
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg"
                    className="cursor"
                  ></img>
                </div>
                <div className="banner mt-4">
                  <img
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-banner-04.jpg"
                    className="cursor"
                  ></img>
                </div>
              </div>
            </div>
            <div className="col-md-9 productrow">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text-sml mb-0">
                    Do not miss the current offers until the end of March
                  </p>
                </div>

                <Button className="viewAllBtn ms-auto">
                  View all
                  <IoArrowForwardOutline />
                </Button>
              </div>

              <div className="product_row w-100 mt-4">
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

              <div className="d-flex align-items-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                  <p className="text-sml mb-0">
                    New products with updated stocks.
                  </p>
                </div>

                <Button className="viewAllBtn ms-auto">
                  View all
                  <IoArrowForwardOutline />
                </Button>
              </div>

              <div className="product_row productRow2 w-100 mt-4 d-flex">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>

              <div className="d-flex mt-4 mb-5 bannerSec">
                <div className="banner">
                  <img
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-01.jpg"
                    className="cursor"
                  ></img>
                </div>
                <div className="banner">
                  <img
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-02.jpg"
                    className="cursor"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
