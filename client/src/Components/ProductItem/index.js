import React, { useContext, useState } from "react";
import { AiOutlineFullscreen } from "react-icons/ai";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { IoMdHeartEmpty } from "react-icons/io";
import { MyContext } from "../../App";

export default function ProductItem(props) {
  const context = useContext(MyContext);

  const viewProductDetails = (id) => {
    context.setIsOpenProductModal(true);
  };

  return (
    <>
      <div className={`item productItem ${props.itemView}`}>
        <div className="imgWrapper">
          <img
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60.jpg"
            className="w-100"
          />
          <div className="actions">
            <Button onClick={() => viewProductDetails(1)}>
              <AiOutlineFullscreen />
            </Button>
            <Button>
              <IoMdHeartEmpty />
            </Button>
          </div>
        </div>

        <span className="badge bg-primary">28%</span>

        <div className="info">
          <h4>Angie’s Boomchickapop Sweet & Salty Kettle Corn</h4>
          <span className="text-success d-block">In Stock</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={3}
            readOnly
            size="small"
            precision={0.5}
          />
          <div className="d-flex">
            <span className="oldPrice">$20.00</span>
            <span className="onetPrice text-danger ms-2">$14.00</span>
          </div>
        </div>
      </div>
    </>
  );
}
