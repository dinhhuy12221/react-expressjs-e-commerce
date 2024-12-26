import React, { useContext, useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { IoClose } from "react-icons/io5";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import QuantityBox from "../QuantityBox";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";
import { MyContext } from "../../App";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import './index.css'
import ProductZoom from "../ProductZoom";

export default function ProductModal(props) {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();

  const context = useContext(MyContext);

  const goto = (index) => {
    setSlideIndex(index);
    zoomSlider.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };

  return (
    <>
      <Dialog
        className="productModal"
        open={true}
        onClose={() => context.setIsOpenProductModal(false)}
      >
        <Button
          className="close_"
          onClick={() => context.setIsOpenProductModal(false)}
        >
          <IoClose />
        </Button>
        <h4 className="mb-1 font-weight-bold">
          Angie’s Boomchickapop Sweet & Salty Kettle Corn
        </h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center me-4">
            <span>Brands:</span>
            <span className="ms-2">
              <b>Welch's</b>
            </span>
          </div>

          <Rating
            name="disabled"
            defaultValue={3}
            precision={0.5}
            size="small"
            disabled
          />
        </div>
        <hr />
        <div className="row mt-2 productDetailsModal">
          <div className="col-md-5">
            <ProductZoom />
          </div>
          <div className="col-md-7">
            <div className="d-flex info align-items-center mb-2">
              <span className="oldPrice lg me-2">$20.00</span>
              <span className="netPrice text-danger lg">$14.00</span>
            </div>
            <span className="badge bg-success">IN STOCK</span>
            <p className="mt-4">
              Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
              malesuada tincidunt. Class aptent taciti sociosqu ad litora
              torquent
            </p>

            <div className="d-flex align-items-center">
              <QuantityBox />
              <Button className="bg-red btn-lg btn-big btn-round ms-2">
              <IoCartOutline className="me-2"/>Add to cart
              </Button>
            </div>

            <div className="d-flex align-items-center mt-5 actions">
              <Button className="btn-round btn-sml" variant="outlined">
                <CiHeart />
                &nbsp;ADD TO WISHSLIST
              </Button>
              <Button className="btn-round btn-sml" variant="outlined">
                <MdCompareArrows />
                &nbsp;COMPARE
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
