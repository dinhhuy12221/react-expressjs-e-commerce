import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../App";
import "./index.css";
import Breadcrumb from "../../components/Breadcrumb";
import { TiDelete } from "react-icons/ti";
import { PiCameraRotate } from "react-icons/pi";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const Profile = () => {
  const { user } = useContext(AdminContext);
  const [draft, setDraft] = useState<any>(null);

  useEffect(() => {
    setDraft(user);
  }, [user]);

  const handleSubmit = () => {};
  const handleChange = () => {};
  const handleCancel = () => {};
  const handleImageChange = () => {};
  const handleImageDelete = () => {};
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

      <div className="profile-content">
        <h2>user ID: #{user?._id}</h2>
        <form method="PUT" onSubmit={handleSubmit}>
          <div className="profile-content-images">
            {/* <h6 className="mb-4">Product Gallery</h6> */}
            {/* <Slider
                  {...productSliderOptions}
                  ref={mainImagesSlider}
                  className="profile-content-images-slider-main"
                >
                  {product?.images.map(item => <div className="profile-content-images-slider-main-item">
                    <img
                      src={item.url}
                    />
                  </div>)}
                </Slider>
                <Slider
                  {...productSliderSmallOptions}
                  ref={sideImagesSlider}
                  className="profile-content-images-slider-side"
                >
                  {product?.images.map(item => <div className="profile-content-images-slider-side-item">
                    <img
                      src={item.url}
                    />
                  </div>)}
                </Slider> */}
            <div className="profile-content-images-item">
              <input type="file" onChange={(e) => handleImageChange()} />
              {draft?.image.url ? (
                <>
                  <img src={draft?.image.url} alt="product" width="120" />
                  <TiDelete
                    className="profile-content-images-item-delete"
                    onClick={() => handleImageDelete()}
                  />
                  <PiCameraRotate />
                </>
              ) : (
                <MdOutlineAddCircleOutline />
              )}
            </div>
          </div>
          <div className="profile-content-main">
            <div className="profile-content-main-item">
              <h4>Username</h4>
              <input
                className="profile-content-main-item-input"
                type="text"
                spellCheck="false"
                placeholder="Enter the name"
                name="name"
                value={draft?.username}
                onChange={handleChange}
              />
            </div>
            <div className="profile-content-main-item">
              <h4>Fullname</h4>
              <textarea
                className="profile-content-main-item-textarea"
                spellCheck="false"
                placeholder="Enter the description"
                name="description"
                value={draft?.fullname}
                onChange={handleChange}
              />
            </div>
            <div className="profile-content-main-item">
              <h4>Phone number</h4>
              <input
                className="profile-content-main-item-input"
                type="number"
                spellCheck="false"
                name="price"
                value={draft?.phone_number}
                onChange={handleChange}
              />
            </div>
            <div className="profile-content-main-item">
              <h4>Address</h4>
              <input
                className="profile-content-main-item-input"
                type="number"
                spellCheck="false"
                name="discount"
                value={draft?.address}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="profile-content-button">
            <button
              type="button"
              className="profile-content-button-cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button type="submit" className="profile-content-button-save">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
