import React, { useContext, useEffect, useState } from "react";
import ProductZoom from "../../components/ProductZoom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../components/QuantityBox";
import Button from "@mui/material/Button";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import { MyContext } from "../../App";

import "./index.css";
import ProductReview from "./ProductReview";
import ProductSwiper from "../../components/ProductSwiper";
import { getProductBySlug } from "../../api/product";
import { getCategoryById } from "../../api/category";
import { getDiscountPrice } from "../../utils/getDiscountPrice";

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
     return {}
  } catch (error) {
    console.error(error);
  }
};

const { product, category } = await getProductInfo();

export default function ProductDetails() {
  const [activeSize, setActiveSize] = useState(null);

  const currentPrice = getDiscountPrice(product?.price, product?.discount);

  const context = useContext(MyContext);

  const isActive = (index) => {
    setActiveSize(index);
  };

  useEffect(() => {
    context.setIsHeaderFooterShow(true);
  }, []);

  return (
    <section className="productDetails section">
      <div className="container">
        <div className="row mb-3">
          <h2 className="hd text-capitalize">{product?.name}</h2>
          <ul className="list list-inline d-flex align-items-center">
            <li className="list-inline-item">
              <div className="d-flex align-items-center">
                <span className="text-secondary">Brands: &nbsp;</span>
                <span>{product?.brand}</span>
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
                <span className="text-secondary ms-2">
                  {product?.numReviews} Review
                </span>
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
            <ProductZoom images={product?.image}/>
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
              <Button className="bg-red btn-big btn-round ms-1">
                <IoCartOutline className="me-2" />
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

        <br />

        <ProductReview title="REVIEWS" />

        <ProductSwiper title="RELATED PRODUCTS" />

        <ProductSwiper title="RECENTLY VIEWED PRODUCTS" />
      </div>
    </section>
  );
}
