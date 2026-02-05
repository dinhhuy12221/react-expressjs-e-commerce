import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import Tooltip from "@mui/material/Tooltip";
import "react-inner-image-zoom/lib/styles.min.css";
import { MdCompareArrows } from "react-icons/md";
import ThumbnailsSwiper from "~/components/Product/ThumbnailSwiper";
import QuantityBox from "~/components/QuantityBox";
import Review from "./Review";
import ItemSwiper from "~/components/Product/ItemSwiper";
import { getProductBySlug } from "~/api/product";
import { getCategoryById } from "~/api/category";
import { getDiscountPrice } from "~/utils/getDiscountPrice";
import "./index.css";

const getProductInfo = async () => {
  try {
    const slug = new URL(window.location).pathname.split("/")[2];
    const product = await getProductBySlug(slug)
      .then((result) => result[0])
      .catch((error) => console.error(error));

    if (product) {
      const categoryId = product.categoryId;
      const category = await getCategoryById(categoryId);

      return { product, category };
    }
    return {};
  } catch (error) {
    console.error(error);
  }
};

const { product, category } = await getProductInfo();

export default function Product() {
  const [activeSize, setActiveSize] = useState(null);

  const currentPrice = getDiscountPrice(product?.price, product?.discount);

  const isActive = (index) => {
    setActiveSize(index);
  };

  return (
    <section className="page-product">
      <div className="page-product-content">
        <div className="page-product-main">
          <div className="page-product-main-header">
            <h1 className="page-product-main-header-name">{product.name}</h1>
            <div className="page-product-main-header-rating">
              <div className="page-product-main-header-brand">
                <span>Brands:</span>
                <span>
                  <b> {product.brand}</b>
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
                    ${product.price}
                  </span>
                  <span className="page-product-main-content-main-status-prices-net-price">
                    ${currentPrice}
                  </span>
                </div>
                <span className="page-product-main-content-main-status-stock">
                  {product.countInStock > 0 &&
                    `In Stock: ${product.countInStock}`}
                </span>
              </div>
              <p className="page-product-main-content-main-description">
                {product.description}
              </p>

              <div className="page-product-main-content-main-quantity">
                <QuantityBox stockQuantity={product.countInStock} />
                <button className="btn btn--primary page-product-main-content-main-quantity-add-button">
                  <IoCartOutline className="" />
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
            </div>
          </div>
          {/* <div className="page-product-main-header">
            <h2 className="page-product-main-header-product-name">
              {product?.name}
            </h2>
            <div className="page-product-main-header-product-brand">
              <span>Brands: &nbsp;</span>
              <span>{product?.brand}</span>
            </div>
            <div className="page-product-main-header-product-rating">
              <Rating
                name="read-only"
                defaultValue={3}
                precision={0.5}
                readOnly
                size="small"
              />
              <span>{product?.numReviews} Review(s)</span>
            </div>
            <div>
              <span className="">SKU: &nbsp;</span>
              <span>BE4CURT</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <ThumbnailSwiper product={product} />
            </div>
            <div className="col-md-7 ps-3">
              <div className="d-flex info mb-3">
                <span className="oldPrice">${product?.price}</span>
                <span className="netPrice">${currentPrice}</span>
              </div>
              <span className="badge badge-success">
                {product?.isFeatured && "IN STOCK"}
              </span>
              <p className="mt-3">{product?.description}</p>
  
              <div className="productSize d-flex align-items-center">
                <span>Size / Weight:</span>
                <ul className="list list-inline mb-0 ps-4">
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 0 ? "active" : ""}`}
                      onClick={() => setActiveSize(0)}
                    >
                      {50}g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 1 ? "active" : ""}`}
                      onClick={() => setActiveSize(1)}
                    >
                      {100}g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 2 ? "active" : ""}`}
                      onClick={() => setActiveSize(2)}
                    >
                      {200}g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 3 ? "active" : ""}`}
                      onClick={() => setActiveSize(3)}
                    >
                      {300}g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 4 ? "active" : ""}`}
                      onClick={() => setActiveSize(4)}
                    >
                      {500}g
                    </a>
                  </li>
                </ul>
              </div>
  
              <div className="d-flex align-items-center mt-3">
                <QuantityBox quantity={1} />
                <button className="bg-red btn--lg btn-round ms-1">
                  <IoCartOutline className="me-2" />
                  <span>Add to cart</span>
                </button>
              </div>
  
              <div className="d-flex align-items-center mt-3">
                <Tooltip title="Add to wishlist" placement="bottom">
                  <button className="bg-red btn--lg btn-circle me-2">
                    <CiHeart />
                  </button>
                </Tooltip>
                <Tooltip title="Add to compare" placement="bottom">
                  <button className="bg-red btn--lg btn-circle">
                    <MdOutlineCompareArrows />
                  </button>
                </Tooltip>
              </div>
            </div>
          </div> */}
        </div>

        <Review />

        <ItemSwiper title="RELATED PRODUCTS" />

        <ItemSwiper title="RECENTLY VIEWED PRODUCTS" />
      </div>
    </section>
  );
}
