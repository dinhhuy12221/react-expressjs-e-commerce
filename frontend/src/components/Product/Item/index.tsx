import React from "react";

import { useContext } from "react";
import { AiOutlineFullscreen } from "react-icons/ai";
import Rating from "@mui/material/Rating";
import { IoMdHeartEmpty } from "react-icons/io";

import { Link } from "react-router-dom";
import { MyContext } from "~/App";
// import LoadingAnimation from "~/components/LoadingAnimation";
import { getDiscountPrice } from "~/utils/getDiscountPrice";

import "./index.css";

export default function Item({ product }) {
  const context = useContext(MyContext);

  const viewProductDetails = () => {
    context.setIsOpenProductModal(true);
    context.setProductModal(product);
  };

  const currentPrice = getDiscountPrice(product.price, product.discount).toFixed(2);

  return (
    <div className="product">
      <div className="product-buttons">
        <button
          className="btn btn--outlined btn--rounded detail-button"
          onClick={() => viewProductDetails()}
        >
          <AiOutlineFullscreen />
        </button>
        <button className="btn btn--outlined btn--rounded wishlist-button">
          <IoMdHeartEmpty />
        </button>
      </div>
      <div className="product-thumbnail">
        <Link to={"/product/" + product.slug}>
        <img src={product.image} />
        </Link>
      </div>

      <div className="product-badge">
        <span className="btn">{product.discount}%</span>
      </div>

      <div className="product-main">
        <Link to={"/product/" + product.slug}>
          <span className="product-name">{product.name}</span>
        </Link>
        <span className="product-status">{product.countInStock > 0 && "In Stock"}</span>
        <Rating
          className="product-rating"
          name="read-only"
          value={product.rating}
          readOnly
          size="small"
          precision={0.5}
        />
        <div className="product-price">
          <span className="product-old-price">${product.price}</span>
          <span className="product-net-price">${currentPrice}</span>
        </div>
      </div>
    </div>
  );
}
