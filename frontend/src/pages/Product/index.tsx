import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import Tooltip from "@mui/material/Tooltip";
import "react-inner-image-zoom/lib/styles.min.css";
import { MdCompareArrows } from "react-icons/md";
import ThumbnailsSwiper from "~/components/Product/ThumbnailSwiper";
import QuantityBox from "~/components/QuantityCounter";
import Review from "./Review";
import ItemSwiper from "~/components/Product/ItemSwiper";
import { getProductBySlug } from "~/api/product";
import { getCategoryById } from "~/api/category";
import { getDiscountPrice } from "~/utils/getDiscountPrice";
import axios from "~/api/axios";
import "./index.css";

export default function Product() {
  // const [activeSize, setActiveSize] = useState(null);
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [productList, setProductList] = useState([]);

  const currentPrice = getDiscountPrice(product?.price, product?.discount).toFixed(2);
  let isMounted = true;

  const getProductList = async () => {
    try {
      const response = await axios.get("/product");
      isMounted && setProductList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductInfo = async () => {
    try {
      const slug = new URL(window.location.toString()).pathname.split("/")[2];
      const tmpProduct = await getProductBySlug(slug)
        .then((result) => result[0])
        .catch((error) => console.error(error));

      console.log(tmpProduct, slug);

      if (!tmpProduct) return null;

      const category = await getCategoryById(tmpProduct.categoryId);

      setProduct(tmpProduct);
      setCategory(category);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    getProductList();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  // const isActive = (index) => {
  //   setActiveSize(index);
  // };

  useEffect(() => {
    getProductInfo();
  }, []);

  return (
    <section className="page-product">
      <div className="page-product-content">
        <div className="page-product-main">
          <div className="page-product-main-header">
            <h1 className="page-product-main-header-name">{product?.name}</h1>
            <div className="page-product-main-header-rating">
              <div className="page-product-main-header-brand">
                <span>Brands:</span>
                <span>
                  <b> {product?.brand}</b>
                </span>
              </div>
              <Rating defaultValue={3} precision={0.5} size="small" readOnly />
            </div>
          </div>
          <div className="page-product-main-content">
            <ThumbnailsSwiper product={product} />
            <div className="page-product-main-content-main">
              <div className="page-product-main-content-main-status">
                <div className="page-product-main-content-main-status-prices">
                  <span className="page-product-main-content-main-status-prices-old-price">
                    ${product?.price}
                  </span>
                  <span className="page-product-main-content-main-status-prices-net-price">
                    ${currentPrice}
                  </span>
                </div>
                <span className="page-product-main-content-main-status-stock">
                  {`In Stock: ${product?.countInStock}`}
                </span>
              </div>
              <p className="page-product-main-content-main-description">
                {product?.description}
              </p>

              <div className="page-product-main-content-main-quantity">
                <QuantityBox value={quantity} onChange={setQuantity} stock={product?.countInStock} />
                <button className="btn btn--primary page-product-main-content-main-quantity-add-button">
                  <IoCartOutline />
                  <span>Add to cart</span>
                </button>
              </div>

              <div className="page-product-main-content-main-buttons">
                <button className="btn btn--outlined page-product-main-content-main-wishlist-button">
                  <CiHeart />
                  &nbsp;Add to wishlist
                </button>
                <button className="btn btn--outlined page-product-main-content-main-compare-button">
                  <MdCompareArrows />
                  &nbsp;Compare
                </button>
              </div>
              <span className="page-product-main-content-main-category">
                Category: <b>{category?.name}</b>
              </span>
            </div>
          </div>
        </div>

        <Review />

        <ItemSwiper productList={productList} title="RELATED PRODUCTS" />

        <ItemSwiper
          productList={productList}
          title="RECENTLY VIEWED PRODUCTS"
        />
      </div>
    </section>
  );
}
