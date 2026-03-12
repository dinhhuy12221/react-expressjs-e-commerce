import Rating from "@mui/material/Rating";
import { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { useParams } from "react-router-dom";
import { getProductBySlug } from "../../api/product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { PiCameraRotate } from "react-icons/pi";
import { getReviewByProductId } from "../../api/review";

// function handleClick(event) {
//   event.preventDefault();
//   console.info("You clicked a breadcrumb.");
// }

export default function ProductView() {
  const { slug } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [reviews, setReviews] = useState<any>(null);

  // const reviews = new Array(8).fill(
  //   <div className="product-view-review-item">
  //     <div className="product-view-review-item-header">
  //       <div>
  //         <h4 className="product-view-review-item-header-name">Alue</h4>
  //         <span className="product-view-review-item-header-time">
  //           25 minutes ago
  //         </span>
  //       </div>
  //       <Rating name="read-only" value={4.5} precision={0.5} readOnly />
  //     </div>
  //     {/* <Button className="btn-blue btn-lg btn-big ms-auto">
  //               <TiArrowBack className="me-2" />
  //               Reply
  //             </Button> */}
  //     <p className="product-view-review-item-content">
  //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo
  //       nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius
  //       harum tempora quis minima, adipisci natus quod magni omnis quas.
  //     </p>
  //   </div>
  // );

  // var productSliderOptions = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  // };
  // var productSliderSmallOptions = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   arrows: false,
  // };

  // const goToSlide = (index) => {
  //   // if (mainImagesSlider.current !== null && sideImagesSlider.current !== null) {
  //     mainImagesSlider.current?.slickGoTo(index);
  //     sideImagesSlider.current?.slickGoTo(index);
  //   // }
  // };

  useEffect(() => {
    const getProduct = async () => {
      const result = await getProductBySlug(slug);
      setProduct(result.data[0]);
    };

    console.log(product);

    getProduct();
  }, [slug]);

  useEffect(() => {
    const getReviews = async () => {
      const result = await getReviewByProductId(product._id);
      setReviews(result);
    };

    getReviews();
  }, [product]);

  if (product === null) return;

  return (
    <div className="product-view">
      <Breadcrumb
        title="Product View"
        path={[
          {
            name: "Dashboard",
            to: "/dashboard",
          },
          {
            name: "Product View",
            to: `/product/${slug}`,
          },
        ]}
      />

      <div className="product-view-content">
        <h2>Product ID: #{product._id}</h2>
        <form method="POST">
          <div className="product-view-content-images">
            {/* <h6 className="mb-4">Product Gallery</h6> */}
            {/* <Slider
                  {...productSliderOptions}
                  ref={mainImagesSlider}
                  className="product-view-content-images-slider-main"
                >
                  {product.images.map(item => <div className="product-view-content-images-slider-main-item">
                    <img
                      src={item.url}
                    />
                  </div>)}
                </Slider>
                <Slider
                  {...productSliderSmallOptions}
                  ref={sideImagesSlider}
                  className="product-view-content-images-slider-side"
                >
                  {product.images.map(item => <div className="product-view-content-images-slider-side-item">
                    <img
                      src={item.url}
                    />
                  </div>)}
                </Slider> */}
            {product.images.map((item, index) => (
              <div className="product-view-content-images-item" key={index}>
                <img src={item.url} alt="product" width="120" />
                <PiCameraRotate />
                <input type="file" />
              </div>
            ))}
          </div>
          <div className="product-view-content-main">
            <div className="product-view-content-main-item">
              <h4>Name</h4>
              <input
                className="product-view-content-main-item-input"
                type="text"
                spellCheck="false"
                placeholder="Enter the name"
                value={product.name}
              />
            </div>
            <div className="product-view-content-main-item">
              <h4>Description</h4>
              <textarea
                className="product-view-content-main-item-textarea"
                spellCheck="false"
                placeholder="Enter the description"
                value={product.description}
              />
            </div>
            <div className="product-view-content-main-item">
              <h4>Category</h4>
              <input
                className="product-view-content-main-item-input"
                type="text"
                spellCheck="false"
                placeholder="Enter the category"
                value={product.categoryId.name}
              />
            </div>
            <div className="product-view-content-main-item">
              <h4>Brand</h4>
              <input
                className="product-view-content-main-item-input"
                type="text"
                placeholder="Enter the brand"
                value={product.brandId?.name}
              />
            </div>
            <div className="product-view-content-main-item">
              <h4>Price</h4>
              <input
                className="product-view-content-main-item-input"
                type="number"
                spellCheck="false"
                value={product.price}
              />
            </div>
            <div className="product-view-content-main-item">
              <h4>Discount (%)</h4>
              <input
                className="product-view-content-main-item-input"
                type="number"
                spellCheck="false"
                value={product.discount}
              />
            </div>
            <div className="product-view-content-main-item">
              <h4>Stock</h4>
              <input
                className="product-view-content-main-item-input"
                type="number"
                value={product.countInStock}
              />
            </div>
          </div>
          <div className="product-view-content-button">
            <button className="product-view-content-button-cancel">
              Cancel
            </button>
            <button className="product-view-content-button-save">Save</button>
          </div>
        </form>

        <div className="product-view-rating">
          <h3>Rating</h3>
          <Rating
            value={product.rating}
            precision={0.5}
            readOnly
            sx={{
              color: "#faaf00",
            }}
          />
          <h3>Rating Analytics</h3>
          <div className="product-view-rating-section">
            <div className="product-view-rating-section-item">
              <div className="product-view-rating-section-item-label">
                5 Star (22)
              </div>
              <div
                className="product-view-rating-section-item-progress"
                style={{ width: "100%" }}
              >
                <div style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="product-view-rating-section-item">
              <div className="product-view-rating-section-item-label">
                4 Star (22)
              </div>
              <div
                className="product-view-rating-section-item-progress"
                style={{ width: "100%" }}
              >
                <div style={{ width: "60%" }}></div>
              </div>
            </div>
            <div className="product-view-rating-section-item">
              <div className="product-view-rating-section-item-label">
                3 Star (22)
              </div>
              <div
                className="product-view-rating-section-item-progress"
                style={{ width: "100%" }}
              >
                <div style={{ width: "40%" }}></div>
              </div>
            </div>
            <div className="product-view-rating-section-item">
              <div className="product-view-rating-section-item-label">
                2 Star (22)
              </div>
              <div
                className="product-view-rating-section-item-progress"
                style={{ width: "100%" }}
              >
                <div style={{ width: "20%" }}></div>
              </div>
            </div>
            <div className="product-view-rating-section-item">
              <div className="product-view-rating-section-item-label">
                1 Star (22)
              </div>
              <div
                className="product-view-rating-section-item-progress"
                style={{ width: "100%" }}
              >
                <div style={{ width: "10%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-view-review">
          <h3>Reviews</h3>

          {reviews && reviews.map((item) => (
            <div className="product-view-review-item">
              <div className="product-view-review-item-header">
                <div>
                  <h4 className="product-view-review-item-header-name">{item.customerId.fullname}</h4>
                  <span className="product-view-review-item-header-time">
                    25 minutes ago
                  </span>
                </div>
                <Rating name="read-only" value={item.rating} readOnly />
              </div>
              {/* <Button className="btn-blue btn-lg btn-big ms-auto">
                <TiArrowBack className="me-2" />
                Reply
              </Button> */}
              <p className="product-view-review-item-content">
                {item.content}
              </p>
            </div>
          ))}
          {/* 
          <h6 className="mt-4 mb-4">Review Reply Form</h6>
          <form className="reviewForm">
            <textarea placeholder="Write here"></textarea>
            <Button className="btn-blue btn-big btn-lg w-100 mt-3">
              DROP YOUR REPLIES
            </Button>
          </form> */}
        </div>
      </div>
    </div>
  );
}
