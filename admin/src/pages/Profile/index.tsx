import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../App";
import Breadcrumb from "../../components/Breadcrumb";
import { TiDelete } from "react-icons/ti";
import { PiCameraRotate } from "react-icons/pi";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import "./index.css";

const Profile = () => {
  const { user } = useContext(AdminContext);
  const [draft, setDraft] = useState<any>(null);
  const [imageFile, setImageFile] = useState<any>(null)

  const handleSubmit = () => {};
  const handleChange = () => {};
  const handleCancel = () => {};
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const preview = URL.createObjectURL(file)
    
    setImageFile(file)
    setDraft(prev => ({
      ...prev,
      image: {
        ...prev.image,
        url: preview
      }
    }))
  };

  useEffect(() => {
    setDraft(user);
  }, [user]);

  console.log(imageFile);
  
  const handleImageDelete = () => {};
  return (
    <div className="profile">
      <Breadcrumb
        path={[
          {
            name: "Profile",
            to: `/profile`,
          },
        ]}
      />

      <div className="profile-content">
        <h2>user ID: #{user?._id}</h2>
        <form method="PUT" onSubmit={handleSubmit}>
          <div className="profile-content-images">
            <div className="profile-content-images-item">
              <input type="file" onChange={handleImageChange} />
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
                value={draft?.username}
                disabled
              />
            </div>
            <div className="profile-content-main-item">
              <h4>Fullname</h4>
              <input
                className="profile-content-main-item-input"
                spellCheck="false"
                placeholder="Enter your fullname"
                name="fullname"
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
                name="phoneNumber"
                value={draft?.phone_number}
                onChange={handleChange}
              />
            </div>
            <div className="profile-content-main-item">
              <h4>Address</h4>
              <input
                className="profile-content-main-item-input"
                type="text"
                spellCheck="false"
                name="address"
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
