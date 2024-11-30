import React, { useState } from "react";
import ProductZoom from "../../Components/ProductZoom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";
import Button from "@mui/material/Button";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import RelatedProducts from "./RelatedProducts";

export default function ProductDetails() {
  const [activeSize, setActiveSize] = useState(null);

  const isActive = (index) => {
    setActiveSize(index);
  };

  return (
    <>
      <section className="productDetails section">
        <div className="container">
          <div className="row mb-3">
            <h2 className="hd text-capitalize">
              Angie’s Boomchickapop Sweet & Salty Kettle Corn
            </h2>
            <ul className="list list-inline d-flex align-items-center">
              <li className="list-inline-item">
                <div className="d-flex align-items-center">
                  <span className="text-secondary">Brands: &nbsp;</span>
                  <span>Welch's</span>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="d-flex align-items-center">
                  <Rating
                    name="read-only"
                    defaultValue={3}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                  <span className="text-secondary ms-2">1 Review</span>
                </div>
              </li>
              <li className="list-inline-item">
                <div>
                  <span className="text-secondary">SKU: &nbsp;</span>
                  <span>BE4CURT</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <ProductZoom />
            </div>
            <div className="col-md-4 ps-3">
              <div className="d-flex info mb-3">
                <span className="oldPrice">$20.00</span>
                <span className="netPrice text-danger ms-2">$14.00</span>
              </div>
              <span className="badge badge-success">IN STOCK</span>
              <p className="mt-3">
                Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
                malesuada tincidunt. Class aptent taciti sociosqu ad litora
                torquentVivamus adipiscing nisl ut dolor dignissim semper. Nulla
                luctus malesuada tincidunt. Class aptent taciti sociosqu ad
                litora torquent
              </p>

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
                <QuantityBox />
                <Button className="bg-red btn-big btn-round ms-1">
                  <IoCartOutline className="me-1" />
                  <span>Add to cart</span>
                </Button>
              </div>

              <div className="d-flex align-items-center mt-3">
                <Tooltip title="Add to wishlist" placement="bottom">
                  <Button className="bg-red btn-big btn-circle me-2">
                    <CiHeart />
                  </Button>
                </Tooltip>
                <Tooltip title="Add to compare" placement="bottom">
                  <Button className="bg-red btn-big btn-circle">
                    <MdOutlineCompareArrows />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>

          <br/>

          <RelatedProducts title="RELATED PRODUCTS"/>
          
          <RelatedProducts title="RECENTLY VIEWED PRODUCTS"/>
        </div>
      </section>
    </>
  );
}
