import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../App";
import Breadcrumb from "../../components/Breadcrumb";
import { TiDelete } from "react-icons/ti";
import { PiCameraRotate } from "react-icons/pi";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import "./index.css";
import { updateUser } from "../../api/user";

const Profile = () => {
  const { user } = useContext(AdminContext);
  const [profile, setProfile] = useState<any>(null)
  const [draft, setDraft] = useState<any>(null);
  const [imageFile, setImageFile] = useState<any>(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      ...draft,
      imageFile
    }
    const result = await updateUser(payload)

    if (result.ok) alert("User updated successfully")
  };
  const handleChange = (e) => {
    const { name, value } = e.target

    setDraft(prev => ({
      ...prev,
      [name]: value
    }))
  };
  const handleCancel = () => {
    setDraft(profile)
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const preview = URL.createObjectURL(file)
    
    setImageFile(file)
    setDraft(prev => ({
      ...prev,
      image: {
        url: preview,
        public_id: prev.image.public_id,
      }
    }))
  };

  const handleImageDelete = () => {
    setImageFile(null)
    setDraft(prev => ({
      ...prev,
      image: {
        ...prev.image,
        url: ""
      }
    }))
  }
  useEffect(() => {
    setDraft(user);
    setProfile(user)
  }, [user]);
  

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
        <h2>User ID: #{user?._id}</h2>
        <form method="PUT" onSubmit={handleSubmit}>
          <div className="profile-content-images">
            <div className="profile-content-images-item">
              <input type="file" onChange={handleImageChange} />
              {draft?.image?.url ? (
                <>
                  <img src={draft?.image?.url} alt="product" width="120" />
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
                placeholder="Enter your phone number"
                name="phone_number"
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
                placeholder="Enter your address"
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
