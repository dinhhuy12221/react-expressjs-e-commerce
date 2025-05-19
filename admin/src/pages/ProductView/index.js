import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Rating from "@mui/material/Rating";

import Slider from "react-slick";
import { ArrowBack } from "@mui/icons-material";

import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdBrandingWatermark } from "react-icons/md";
import { MdFilterVintage } from "react-icons/md";
import { IoColorPaletteSharp } from "react-icons/io5";
import { IoResize } from "react-icons/io5";
import { MdOutlineRateReview } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { IoPricetagsSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";

import UserAvatarImg from "../../components/UserAvatarImg";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Breadcrumb from "../../components/Breadcrumb";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function ProductView() {
  const productSliderBig = useRef();
  const productSliderSmall = useRef();

  var productSliderOptions = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  var productSliderSmallOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  const goToSlide = (index) => {
    productSliderBig.current.slickGoTo(index);
    productSliderSmall.current.slickGoTo(index);
  };
  return (
    <>
      <div className="right-content w-100">
        <Breadcrumb
          title="Product View"
          path={[
            {
              name: "Dashboard",
              to: "/dashboard",
            },
            {
              name: "Product View",
              to: "/product/view",
            },
          ]}
        />
      </div>

      <div className="card productDetailsSection">
        <div className="row">
          <div className="col-md-5">
            <div className="sliderWrapper pt-3 pb-3 ps-4 pe-4">
              <h6 className="mb-4">Product Gallery</h6>
              <Slider
                {...productSliderOptions}
                ref={productSliderBig}
                className="sliderBig"
              >
                <div className="item">
                  <img
                    src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                    className="w-100"
                  />
                </div>
                <div className="item">
                  <img
                    src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp"
                    className="w-100"
                  />
                </div>
                <div className="item">
                  <img
                    src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp"
                    className="w-100"
                  />
                </div>
                <div className="item">
                  <img
                    src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp"
                    className="w-100"
                  />
                </div>
              </Slider>
              <Slider
                {...productSliderSmallOptions}
                ref={productSliderSmall}
                className="sliderSmall"
              >
                <div className="item" onClick={() => goToSlide(0)}>
                  <img
                    src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                    className="w-100"
                  />
                </div>
                <div className="item" onClick={() => goToSlide(1)}>
                  <img
                    src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp"
                    className="w-100"
                  />
                </div>
                <div className="item" onClick={() => goToSlide(2)}>
                  <img
                    src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp"
                    className="w-100"
                  />
                </div>
                <div className="item" onClick={() => goToSlide(3)}>
                  <img
                    src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp"
                    className="w-100"
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div className="col-md-7">
            <div className="pt-3 pb-3 ps-4 pe-4">
              <h6 className="mb-3">Product Details</h6>
              <h4>
                Formal suits for men wedding slim fit 3 piece dress business
                party jacket
              </h4>

              <div className="productInfo mt-3">
                <div className="row mb-3">
                  <div className="col-sm-3 d-flex align-items-center title">
                    <span className="icon d-flex align-items-center">
                      <MdBrandingWatermark />
                    </span>
                    <span className="name">Brand</span>
                  </div>
                  <div className="col-sm-9 productContent">
                    <span>Ecstasy</span>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3 d-flex align-items-center title">
                    <span className="icon d-flex align-items-center">
                      <BiSolidCategoryAlt />
                    </span>
                    <span className="name">Category</span>
                  </div>
                  <div className="col-sm-9 productContent">
                    <span>Man's</span>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3 d-flex align-items-center title">
                    <span className="icon d-flex align-items-center">
                      <MdFilterVintage />
                    </span>
                    <span className="name">Tags</span>
                  </div>
                  <div className="col-sm-9 productContent">
                    <ul className="list list-inline tags sml">
                      <li className="list-inline-item">
                        <span>SUITE</span>
                      </li>
                      <li className="list-inline-item">
                        <span>PARTY</span>
                      </li>
                      <li className="list-inline-item">
                        <span>DRESS</span>
                      </li>
                      <li className="list-inline-item">
                        <span>SMART</span>
                      </li>
                      <li className="list-inline-item">
                        <span>MAN</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3 d-flex align-items-center title">
                    <span className="icon d-flex align-items-center">
                      <IoColorPaletteSharp />
                    </span>
                    <span className="name">Color</span>
                  </div>
                  <div className="col-sm-9 productContent">
                    <ul className="list list-inline tags sml">
                      <li className="list-inline-item">
                        <span>RED</span>
                      </li>
                      <li className="list-inline-item">
                        <span>BLUE</span>
                      </li>
                      <li className="list-inline-item">
                        <span>WHITE</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3 d-flex align-items-center title">
                    <span className="icon d-flex align-items-center">
                      <IoResize />
                    </span>
                    <span className="name">Size</span>
                  </div>
                  <div className="col-sm-9 productContent">
                    <ul className="list list-inline tags sml">
                      <li className="list-inline-item">
                        <span>SM</span>
                      </li>
                      <li className="list-inline-item">
                        <span>MD</span>
                      </li>
                      <li className="list-inline-item">
                        <span>LG</span>
                      </li>
                      <li className="list-inline-item">
                        <span>XL</span>
                      </li>
                      <li className="list-inline-item">
                        <span>XXL</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3 d-flex align-items-center title">
                    <span className="icon d-flex align-items-center">
                      <IoPricetagsSharp />
                    </span>
                    <span className="name">Price</span>
                  </div>
                  <div className="col-sm-9 productContent">
                    <span>$37.00 &nbsp;</span>
                    <span id="oldPrice">$42.00</span>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3 d-flex align-items-center title">
                    <span className="icon d-flex align-items-center">
                      <FaShoppingCart />
                    </span>
                    <span className="name">Stock</span>
                  </div>
                  <div className="col-sm-9 productContent">
                    <span>(68) Piece</span>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3 d-flex align-items-center title">
                    <span className="icon d-flex align-items-center">
                      <MdOutlineRateReview />
                    </span>
                    <span className="name">Review</span>
                  </div>
                  <div className="col-sm-9 productContent">
                    <span>(03) Review</span>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3 d-flex align-items-center title">
                    <span className="icon d-flex align-items-center">
                      <SiTicktick />
                    </span>
                    <span className="name">Published</span>
                  </div>
                  <div className="col-sm-9 productContent">
                    <span>02 Feb 2020</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4">
          <h5 className="mt-4 mb-3">Product Description</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            reprehenderit repellendus expedita esse cupiditate quos doloremque
            rerum, corrupti ab illum est nihil, voluptate ex dignissimos! Sit
            voluptatem delectus nam, molestiae, repellendus ab sint quo aliquam
            debitis amet natus doloremque laudantium? Repudiandae, consequuntur,
            officiis quidem quo deleniti, autem non laudantium sequi error
            molestiae ducimus accusamus facere velit consectetur vero dolore
            natus nihil temporibus aspernatur quia consequatur? Consequuntur
            voluptate deserunt repellat tenetur debitis molestiae doloribus
            dicta. In rem illum dolorem atque ratione voluptates asperiores
            maxime doloremque laudantium magni neque ad quae quos quidem,
            quaerat rerum ducimus blanditiis reiciendis
          </p>

          <br />

          <h6 className="mt-4 mb-3">Rating Analytics</h6>

          <div className="ratingSection">
            <div className="ratingRow d-flex align-items-center">
              <span className="col1">5 Star</span>
              <div className="col2">
                <div className="progress">
                  <div className="progress-bar" style={{ width: "100%" }}></div>
                </div>
              </div>
              <span className="col3">(22)</span>
            </div>
            <div className="ratingRow d-flex align-items-center">
              <span className="col1">4 Star</span>
              <div className="col2">
                <div className="progress">
                  <div className="progress-bar" style={{ width: "80%" }}></div>
                </div>
              </div>
              <span className="col3">(12)</span>
            </div>
            <div className="ratingRow d-flex align-items-center">
              <span className="col1">3 Star</span>
              <div className="col2">
                <div className="progress">
                  <div className="progress-bar" style={{ width: "60%" }}></div>
                </div>
              </div>
              <span className="col3">(32)</span>
            </div>
            <div className="ratingRow d-flex align-items-center">
              <span className="col1">2 Star</span>
              <div className="col2">
                <div className="progress">
                  <div className="progress-bar" style={{ width: "40%" }}></div>
                </div>
              </div>
              <span className="col3">(2)</span>
            </div>
            <div className="ratingRow d-flex align-items-center">
              <span className="col1">1 Star</span>
              <div className="col2">
                <div className="progress">
                  <div className="progress-bar" style={{ width: "20%" }}></div>
                </div>
              </div>
              <span className="col3">(8)</span>
            </div>
          </div>

          <br />

          <h6 className="mt-4 mb-4">Customer_Reviews</h6>

          <div className="reviewsSection">
            <div className="reviewsRow">
              <div className="row">
                <div className="col-sm-7">
                  <div className="userInfo d-flex flex-column justify-content-center mb-1">
                    <div className="d-flex mb-2">
                      <UserAvatarImg
                        imgUrl={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCd1UseTiu5jdfYlwj_wovw4r7TtuWONyLBQ&s"
                        }
                        lg="true"
                      />
                      <div className="info ms-3">
                        <h5>Alue</h5>
                        <span>25 minutes ago</span>
                      </div>
                    </div>
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-sm-5 d-flex align-items-center">
                  <Button className="btn-blue btn-lg btn-big ms-auto">
                    <TiArrowBack className="me-2" />
                    Reply
                  </Button>
                </div>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  quo nostrum dolore fugiat ducimus labore debitis unde autem
                  recusandae? Eius harum tempora quis minima, adipisci natus
                  quod magni omnis quas.
                </p>
              </div>
            </div>

            <div className="reviewsRow reply">
              <div className="row">
                <div className="col-sm-7">
                  <div className="userInfo d-flex flex-column justify-content-center mb-1">
                    <div className="d-flex mb-2">
                      <UserAvatarImg
                        imgUrl={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCd1UseTiu5jdfYlwj_wovw4r7TtuWONyLBQ&s"
                        }
                        lg="true"
                      />
                      <div className="info ms-3">
                        <h5>Alue</h5>
                        <span>25 minutes ago</span>
                      </div>
                    </div>
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-sm-5 d-flex align-items-center">
                  <Button className="btn-blue btn-lg btn-big ms-auto">
                    <TiArrowBack className="me-2" />
                    Reply
                  </Button>
                </div>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  quo nostrum dolore fugiat ducimus labore debitis unde autem
                  recusandae? Eius harum tempora quis minima, adipisci natus
                  quod magni omnis quas.
                </p>
              </div>
            </div>
            <div className="reviewsRow reply">
              <div className="row">
                <div className="col-sm-7">
                  <div className="userInfo d-flex flex-column justify-content-center mb-1">
                    <div className="d-flex mb-2">
                      <UserAvatarImg
                        imgUrl={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCd1UseTiu5jdfYlwj_wovw4r7TtuWONyLBQ&s"
                        }
                        lg="true"
                      />
                      <div className="info ms-3">
                        <h5>Alue</h5>
                        <span>25 minutes ago</span>
                      </div>
                    </div>
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-sm-5 d-flex align-items-center">
                  <Button className="btn-blue btn-lg btn-big ms-auto">
                    <TiArrowBack className="me-2" />
                    Reply
                  </Button>
                </div>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  quo nostrum dolore fugiat ducimus labore debitis unde autem
                  recusandae? Eius harum tempora quis minima, adipisci natus
                  quod magni omnis quas.
                </p>
              </div>
            </div>

            <div className="reviewsRow">
              <div className="row">
                <div className="col-sm-7">
                  <div className="userInfo d-flex flex-column justify-content-center mb-1">
                    <div className="d-flex mb-2">
                      <UserAvatarImg
                        imgUrl={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCd1UseTiu5jdfYlwj_wovw4r7TtuWONyLBQ&s"
                        }
                        lg="true"
                      />
                      <div className="info ms-3">
                        <h5>Alue</h5>
                        <span>25 minutes ago</span>
                      </div>
                    </div>
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-sm-5 d-flex align-items-center">
                  <Button className="btn-blue btn-lg btn-big ms-auto">
                    <TiArrowBack className="me-2" />
                    Reply
                  </Button>
                </div>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  quo nostrum dolore fugiat ducimus labore debitis unde autem
                  recusandae? Eius harum tempora quis minima, adipisci natus
                  quod magni omnis quas.
                </p>
              </div>
            </div>
          </div>

          <br />

          <h6 className="mt-4 mb-4">Review Reply Form</h6>
          <form className="reviewForm">
            <textarea placeholder="Write here"></textarea>
            <Button className="btn-blue btn-big btn-lg w-100 mt-3">
              DROP YOUR REPLIES
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
