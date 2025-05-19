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

export default function ProductItem({ info }) {
  const context = useContext(MyContext);

  const viewProductDetails = (id) => {
    context.setIsOpenProductModal(true);
  };

  const currentPrice = getDiscountPrice(info.price, info.discount);

  return (
    <div className="item productItem">
        <div className="imgWrapper">
          <Link to={"/product/" + info.slug}>
            <img
              src={info.image}
            />
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
  
        <span className="badge bg-primary">{info.discount}%</span>
  
        <div className="info">
          <Link 
            to={"/product/" + info.slug} 
            style={{ color: "#333" }}>
            <h4>{info.name}</h4>
          </Link>
          <div className="status">
            <span className="text-success d-block">In Stock</span>
            <Rating
              className="mt-2 mb-2"
              name="read-only"
              value={info.rating}
              readOnly
              size="small"
              precision={0.5}
            />
            <div className="d-flex">
              <span className="oldPrice">${info.price}</span>
              <span className="netPrice text-danger">${currentPrice}</span>
            </div>
          </div>
        </div>
    </div>
  );
}
