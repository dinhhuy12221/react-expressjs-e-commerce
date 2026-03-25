import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../App";
import "./index.css";
import Breadcrumb from "../../components/Breadcrumb";
import { TiDelete } from "react-icons/ti";

const Profile = () => {
  const { user } = useContext(AdminContext);
  const [draft, setDraft] = useState<any>(null)

  useEffect(() => {
    setDraft(user)
  }, [user])

  const handleSubmit = () => {

  }
  const handleImageChange = () => {

  }
  const handleImageDelete = () => {

  }
  return (
    <div className="profile">
      <Breadcrumb
        path={[
          {
            name: "Dashboard",
            to: "/dashboard",
          },
          {
            name: `${user?.name}`,
            to: `/product?id=${user._id}`,
          },
        ]}
      />

      <div className="product-view-content">
        <h2>user ID: #{user?._id}</h2>
        <form method="PUT" onSubmit={handleSubmit}>
          <div className="product-view-content-images">
            {/* <h6 className="mb-4">Product Gallery</h6> */}
            {/* <Slider
                  {...productSliderOptions}
                  ref={mainImagesSlider}
                  className="product-view-content-images-slider-main"
                >
                  {product?.images.map(item => <div className="product-view-content-images-slider-main-item">
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
                  {product?.images.map(item => <div className="product-view-content-images-slider-side-item">
                    <img
                      src={item.url}
                    />
                  </div>)}
                </Slider> */}
            {draft?.images.map((item, index) => (
              <div className="product-view-content-images-item" key={index}>
                <input
                  type="file"
                  onChange={(e) => handleImageChange(e, index)}
                />
                {item?.url ? (
                  <>
                    <img src={item?.url} alt="product" width="120" />
                    <TiDelete
                      className="product-view-content-images-item-delete"
                      onClick={() => handleDeleteImage(index)}
                    />
                    <PiCameraRotate />
                  </>
                ) : (
                  <MdOutlineAddCircleOutline />
                )}
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
                name="name"
                value={draft?.name}
                onChange={handleChange}
              />
            </div>
            <div className="product-view-content-main-item">
              <h4>Description</h4>
              <textarea
                className="product-view-content-main-item-textarea"
                spellCheck="false"
                placeholder="Enter the description"
                name="description"
                value={draft?.description}
                onChange={handleChange}
              />
            </div>
            <div className="product-view-content-main-item">
              <h4>Category</h4>
              {/* <input
                className="product-view-content-main-item-input"
                type="text"
                spellCheck="false"
                placeholder="Enter the category"
                value={product?.categoryId.name}
              /> */}
              <select
                className="product-view-content-main-item-input"
                name="categoryId"
                value={draft?.categoryId}
                onChange={handleChange}
              >
                <option value={""}>Choose a category ...</option>
                {categories.map((item) => (
                  <option value={item._id}>{item.name}</option>
                ))}
              </select>
            </div>
            <div className="product-view-content-main-item">
              <h4>Brand</h4>
              {/* <input
                className="product-view-content-main-item-input"
                type="text"
                placeholder="Enter the brand"
                value={product?.brandId?.name}
              /> */}
              <select
                className="product-view-content-main-item-input"
                name="brandId"
                value={draft?.brandId}
                onChange={handleChange}
              >
                <option value={""}>Choose a brand...</option>
                {brands.map((item) => (
                  <option value={item._id}>{item.name}</option>
                ))}
              </select>
            </div>
            <div className="product-view-content-main-item">
              <h4>Price</h4>
              <input
                className="product-view-content-main-item-input"
                type="number"
                spellCheck="false"
                name="price"
                value={draft?.price}
                onChange={handleChange}
              />
            </div>
            <div className="product-view-content-main-item">
              <h4>Discount (%)</h4>
              <input
                className="product-view-content-main-item-input"
                type="number"
                spellCheck="false"
                name="discount"
                value={draft?.discount}
                onChange={handleChange}
              />
            </div>
            <div className="product-view-content-main-item">
              <h4>Stock</h4>
              <input
                className="product-view-content-main-item-input"
                type="number"
                name="countInStock"
                value={draft?.countInStock}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="product-view-content-button">
            <button
              type="button"
              className="product-view-content-button-cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button type="submit" className="product-view-content-button-save">
              Save
            </button>
          </div>
        </form>

        <div className="product-view-rating">
          <h3>Rating</h3>
          <Rating
            value={product?.rating}
            precision={0.5}
            readOnly
            sx={{
              color: "#faaf00",
              "& .MuiRating-iconEmpty": {
                color: "#cccccc",
              },
            }}
          />
          <h3>Rating Analytics</h3>
          <div className="product-view-rating-section">
            <div className="product-view-rating-section-item">
              <div className="product-view-rating-section-item-label">
                5 Star ({fiveStar})
              </div>
              <div
                className="product-view-rating-section-item-progress"
                style={{ width: "100%" }}
              >
                <div
                  style={{
                    width: `${
                      fiveStar === 0
                        ? fiveStar
                        : (fiveStar * 100) / reviews?.length
                    }%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="product-view-rating-section-item">
              <div className="product-view-rating-section-item-label">
                4 Star ({fourStar})
              </div>
              <div
                className="product-view-rating-section-item-progress"
                style={{ width: "100%" }}
              >
                <div
                  style={{
                    width: `${
                      fourStar === 0
                        ? fourStar
                        : (fourStar * 100) / reviews?.length
                    }%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="product-view-rating-section-item">
              <div className="product-view-rating-section-item-label">
                3 Star ({threeStar})
              </div>
              <div
                className="product-view-rating-section-item-progress"
                style={{ width: "100%" }}
              >
                <div
                  style={{
                    width: `${
                      threeStar === 0
                        ? threeStar
                        : (threeStar * 100) / reviews?.length
                    }%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="product-view-rating-section-item">
              <div className="product-view-rating-section-item-label">
                2 Star ({twoStar})
              </div>
              <div
                className="product-view-rating-section-item-progress"
                style={{ width: "100%" }}
              >
                <div
                  style={{
                    width: `${
                      twoStar === 0
                        ? twoStar
                        : (twoStar * 100) / reviews?.length
                    }%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="product-view-rating-section-item">
              <div className="product-view-rating-section-item-label">
                1 Star ({oneStar})
              </div>
              <div
                className="product-view-rating-section-item-progress"
                style={{ width: "100%" }}
              >
                <div
                  style={{
                    width: `${
                      oneStar === 0
                        ? oneStar
                        : (oneStar * 100) / reviews?.length
                    }%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-view-review">
          <h3>Reviews</h3>

          {reviews &&
            reviews.map((item) => (
              <div className="product-view-review-item">
                <div className="product-view-review-item-header">
                  <div>
                    <h4 className="product-view-review-item-header-name">
                      {item.customerId.fullname}
                    </h4>
                    <span className="product-view-review-item-header-time">
                      25 minutes ago
                    </span>
                  </div>
                  <Rating
                    name="read-only"
                    value={item.rating}
                    sx={{
                      "& .MuiRating-iconEmpty": {
                        color: "#cccccc",
                      },
                    }}
                    readOnly
                  />
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
};

export default Profile;
