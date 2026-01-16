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
      <div className="product-thumbnail">
        <Link to={"/product/" + product.slug}>
          <img src={product.image} />
        </Link>
        <div className="actions">
          <Button onClick={() => viewProductDetails(1)}>
            <AiOutlineFullscreen />
          </Button>
          <Button>
            <IoMdHeartEmpty />
          </Button>
        </div>
      </div>

      <div className="product-badge">
        <span className="btn btn--primary">{product.discount}%</span>
      </div>

      <div className="product-main">
        <Link to={"/product/" + product.slug}>
          <h4>{product.name}</h4>
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
          <div className="d-flex">
            <span className="oldPrice">${product.price}</span>
            <span className="netPrice text-danger">${currentPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
