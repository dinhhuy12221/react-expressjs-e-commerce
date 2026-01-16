import React, { useContext } from "react";
import { AiOutlineFullscreen } from "react-icons/ai";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { IoMdHeartEmpty } from "react-icons/io";

import { Link } from "react-router-dom";
import { MyContext } from "../../App";
import "./index.css";
import LoadingAnimation from "../LoadingAnimation";
import { getDiscountPrice } from "../../utils/getDiscountPrice";

export default function ProductItem({ product }) {
  const context = useContext(MyContext);

  const viewProductDetails = (id) => {
    context.setIsOpenProductModal(true);
  };

  const currentPrice = getDiscountPrice(product.price, product.discount);

  return (
    <div className="product">
      <div className="product-buttons">
          <button className="btn btn--outlined btn--circle detail-button" onClick={() => viewProductDetails(1)}>
            <AiOutlineFullscreen />
          </button>
          <button className="btn btn--outlined btn--circle wishlist-button">
            <IoMdHeartEmpty />
          </button>
        </div>
      <div className="product-thumbnail">
        {/* <a href={"/product/" + product.slug}> */}
          <img src={product.image} />
        {/* </a> */}
      </div>

      <div className="product-badge">
        <span className="btn">{product.discount}%</span>
      </div>

      <div className="product-main">
        <Link to={"/product/" + product.slug}>
          <span className="product-name">{product.name}</span>
        </Link>
        <div className="status">
          <span className="text-success d-block">In Stock</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={product.rating}
            readOnly
            size="small"
            precision={0.5}
          />
          <div className="">
            <span className="oldPrice">${product.price}</span>
            <span className="netPrice text-danger">${currentPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
