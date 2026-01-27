import { useContext, useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { IoClose } from "react-icons/io5";
import Rating from "@mui/material/Rating";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import QuantityBox from "../QuantityBox";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";
import { MyContext } from "../../App";
import { getDiscountPrice } from "../../utils/getDiscountPrice";
// import "swiper/css";
// import "swiper/css/navigation";

import "./index.css";
import ProductZoom from "../ProductZoom";

export default function ProductModal(props) {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();

  const context = useContext(MyContext);
  const product = context.productModal;
  const currentPrice = getDiscountPrice(product.price, product.discount);

  const goto = (index) => {
    setSlideIndex(index);
    zoomSlider.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };

  return (
    <Dialog
      className="product-modal"
      open={true}
      onClose={() => {
        context.setIsOpenProductModal(false);
        context.setProductModal({});
      }}
    >
      <button
        className="btn btn--outlined btn--circle product-modal-close-button"
        onClick={() => {
        context.setIsOpenProductModal(false);
        context.setProductModal({});
      }}
      >
        <IoClose />
      </button>
      <div className="product-modal-header">
        <h1 className="product-modal-header-name">{product.name}</h1>
        <div className="product-modal-header-rating">
          <div className="product-modal-header-brand">
            <span>Brands:</span>
            <span>
              <b> {product.brand}</b>
            </span>
          </div>
          <Rating defaultValue={3} precision={0.5} size="small" readOnly />
        </div>
      </div>
      <div className="product-modal-content">
        <div className="product-modal-content-thumbnails">
          {/* <ProductZoom /> */}
        </div>
        <div className="product-modal-content-main">
          <div className="product-modal-content-main-status">
            <div className="product-modal-content-main-status-prices">
              <span className="product-modal-content-main-status-prices-old-price">{product.price}</span>
              <span className="product-modal-content-main-status-prices-net-price">{currentPrice}</span>
            </div>
          <span className="product-modal-content-main-status-stock">{product.countInStock > 0 && `In Stock: ${product.countInStock}`}</span>
          </div>
          <p className="product-modal-content-main-description">
            {product.description}
          </p>

          <div className="product-modal-content-main-quantity">
            <QuantityBox stockQuantity={product.countInStock} />
            <button className="product-modal-content-main-add-button">
              <IoCartOutline className="" />
              <span>Add to cart</span>
            </button>
          </div>

          <div className="product-modal-content-main-buttons">
            <button className="product-modal-content-main-wishlist-button">
              <CiHeart />
              &nbsp;ADD TO WISHSLIST
            </button>
            <button className="product-modal-content-main-compare-button">
              <MdCompareArrows />
              &nbsp;COMPARE
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
