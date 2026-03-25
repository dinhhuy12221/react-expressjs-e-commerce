import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../App";
import "./index.css";
import Breadcrumb from "../../components/Breadcrumb";
import { TiDelete } from "react-icons/ti";
import { PiCameraRotate } from "react-icons/pi";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const Profile = () => {
  const { user } = useContext(AdminContext);
  const [draft, setDraft] = useState<any>(null)

  useEffect(() => {
    setDraft(user)
  }, [user])

  const handleSubmit = () => {

  }
  const handleChange = () => {

  }
  const handleCancel = () => {

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
                  onChange={(e) => handleImageChange()}
                />
                {item?.url ? (
                  <>
                    <img src={item?.url} alt="product" width="120" />
                    <TiDelete
                      className="product-view-content-images-item-delete"
                      onClick={() => handleImageDelete()}
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
      </div>
    </div>
  );
};

export default Profile;
