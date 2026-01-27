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
import "swiper/css";
import "swiper/css/navigation";

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
        className="product-modal-close-button"
        onClick={() => {
        context.setIsOpenProductModal(false);
        context.setProductModal({});
      }}
      >
        <IoClose />
      </button>
      <h4 className="">{product.name}</h4>
      <div className="">
        <div className="">
          <span>Brands:</span>
          <span className="">
            <b>{product.brand}</b>
          </span>
        </div>

        <Rating defaultValue={3} precision={0.5} size="small" readOnly />
      </div>
      <hr />
      <div className="productDetailsModal">
        <div className="">
          <ProductZoom />
        </div>
        <div className="">
          <div className="">
            <span className="oldPrice">{product.price}</span>
            <span className="netPrice">{currentPrice}</span>
          </div>
          <span className="">{product.countInStock > 0 && `In Stock: ${product.countInStock}`}</span>
          <p className="">
            {product.description}
          </p>

          <div className="">
            <QuantityBox quantity={product.countInStock} />
            <button className="">
              <IoCartOutline className="" />
              Add to cart
            </button>
          </div>

          <div className="">
            <button className="" variant="outlined">
              <CiHeart />
              &nbsp;ADD TO WISHSLIST
            </button>
            <button className="" variant="outlined">
              <MdCompareArrows />
              &nbsp;COMPARE
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
