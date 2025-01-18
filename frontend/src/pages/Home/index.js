import React, { useContext, useEffect } from "react";
import HomeBanner from "../../components/HomeBanner";
import Button from "@mui/material/Button";
import { IoArrowForwardOutline } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductItem from "../../components/ProductItem";
import HomeCat from "../../components/HomeCat";
import "./index.css";
import { MyContext } from "../../App";
import ProductSwiper from "../../components/ProductSwiper";
import { getProductList } from "../../api/product";

const productList = await getProductList();

export default function Home() {
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHeaderFooterShow(true);
  }, []);

  return (
    <>
      <HomeBanner />
      <HomeCat />
      <section className="home-products">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="side-banner">
                <div className="banner">
                  <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg"></img>
                </div>
                <div className="banner">
                  <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-banner-04.jpg"></img>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="hd">BEST SELLERS</h3>
                  <p className="text-sml mb-0">
                    Do not miss the current offers until the end of March
                  </p>
                </div>

                <Button className="view-all-btn ms-auto">
                  View all
                  <IoArrowForwardOutline />
                </Button>
              </div>

              <ProductSwiper productList={productList}/>

              <div className="d-flex align-items-center mt-5 mb-3">
                <div className="info w-75">
                  <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                  <p className="text-sml mb-0">
                    New products with updated stocks.
                  </p>
                </div>

                <Button className="view-all-btn ms-auto">
                  View all
                  <IoArrowForwardOutline />
                </Button>
              </div>

              <div className="row new-products-list">
                {productList &&
                  productList.map((info, index) => {
                    return (
                      <div
                        key={index}
                        className="col-lg-3 col-md-4 col-sm-6 col-6 new-product"
                      >
                        <ProductItem info={info}/>
                      </div>
                    );
                  })}
              </div>

              <div className="banner-section">
                <div className="banner">
                  <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-01.jpg"></img>
                </div>
                <div className="banner">
                  <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-02.jpg"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
