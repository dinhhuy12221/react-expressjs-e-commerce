import { useEffect, useState } from "react";
import HomeBanner from "../../components/HomeBanner";
import Button from "@mui/material/Button";
import { IoArrowForwardOutline } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductItem from "../../components/Product/ProductItem";
// import HomeCat from "../../components/HomeCat";
import "./index.css";
import ProductSwiper from "../../components/ProductSwiper";
// import { getProductList } from "../../api/product";
import axios, { axiosPrivate } from "../../api/axios";
import HotProduct from "../../components/Product/HotProduct";

export default function Home() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getProductList = async () => {
      try {
        const response = await axios.get("/product");
        isMounted && setProductList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductList();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <>
      <HomeBanner />
      {/* <HomeCat /> */}
      <section className="home">
        <div className="side-banner">
          <div className="banner-item">
            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg"></img>
          </div>
          <div className="banner-item">
            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-banner-04.jpg"></img>
          </div>
        </div>
        <div className="home-main">
          <div className="best-seller-section">
            <div className="best-seller-header">
              <div>
                <h2>BEST SELLERS</h2>
                <span>
                  Do not miss the current offers until the end of March
                </span>
              </div>

              <button className="view-all-button btn btn--outlined">
                <span>View all</span>
                <IoArrowForwardOutline />
              </button>
            </div>
            <ProductSwiper productList={productList} />
          </div>
          
          <div className="hot-product-section">
            <div className="hot-product-header">
              <div>
                <h2>HOT PRODUCT FOR <span className="hot-text">THIS WEEK</span></h2>
                <span>
                  Don't miss this opportunity at a special discount just for
                  this week.
                </span>
              </div>
              <button className="view-all-button btn btn--outlined">
                <span>View all</span>
                <IoArrowForwardOutline />
              </button>
            </div>
            {productList && <HotProduct product={productList[0]}/>}
          </div>
          <div className="new-products-section">
            <div className="new-products-header">
              <div>
                <h2>NEW PRODUCTS</h2>
                <span>New products with updated stocks.</span>
              </div>

              <button className="view-all-button btn btn--outlined">
                <span>View all</span>
                <IoArrowForwardOutline />
              </button>
            </div>
            <div className="new-products-list">
              {productList &&
                productList.map((item, index) => {
                  return <ProductItem product={item} key={index} />;
                })}
            </div>
          </div>

          <div className="banner-section">
            <div className="thumbnail">
              <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-01.jpg"></img>
            </div>
            <div className="thumbnail">
              <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-02.jpg"></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
