import React from "react";

import { getDiscountPrice } from "~/utils/getDiscountPrice";
import "./index.css";
const HotItem = ({ product }) => {
  if (!product) {
    return null;
  }
  const currentPrice = getDiscountPrice(product.price, product.discount);

  return (
    <div className="hot-product">
      <div className="hot-product-thumbnail">
        <div className="hot-product-thumbnail-badge">
          <span>{product.discount}%</span>
        </div>
        <img src={product.image} alt="NOT FOUND" />
      </div>
      <div className="hot-product-main">
        <div className="hot-product-main-prices">
          <span className="hot-product-main-prices-old-price">${product.price}</span>
          <span className="hot-product-main-prices-net-price">${currentPrice}</span>
        </div>
        <span className="hot-product-main-name">{product.name}</span>
        <span className="hot-product-main-status">In Stock</span>
        <div className="hot-product-main-progress">
          <span></span>
        </div>
        <div className="hot-product-main-expired">
          <div className="hot-product-main-expired-countdown">
            <div className="hot-main-expired-countdown-count-item-days">99</div>
            <span>:</span>
            <div className="hot-main-expired-countdown-count-item-hours">23</div>
            <span>:</span>
            <div className="hot-main-expired-countdown-count-item-minutes">59</div>
            <span>:</span>
            <div className="hot-main-expired-countdown-count-item-seconds">59</div>
          </div>
          <div className="hot-product-main-expired-text">Remains until the end of the offer</div>
        </div>
      </div>
      <a href={`/product/${product.slug}`} className="overlay-link"></a>
    </div>
  );
};

export default HotItem;
