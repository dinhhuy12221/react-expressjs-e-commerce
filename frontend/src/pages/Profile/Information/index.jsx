import { useDispatch, useSelector } from "react-redux";
import { selectCurrentCustomer, setCustomer } from "~/features/auth/authSlice";
import Input from "~/components/Input";
import { useEffect, useState } from "react";
import { useUpdateCustomerMutation } from "~/features/customer/customerApi";
import OptionModal from "~/components/OptionModal";
import { FaImages } from "react-icons/fa";
import Logo from "~/assets/images/logo.png";
import "./index.css";

const Information = () => {
  const dispatch = useDispatch();
  const customer = useSelector(selectCurrentCustomer);
  const [updateCustomer, { isLoading }] = useUpdateCustomerMutation();

  const [avatar, setAvatar] = useState(customer?.avatar || "");
  const [fullname, setFullname] = useState(customer?.fullname || "");
  const [phoneNumber, setPhoneNumber] = useState(customer?.phone_number || "");
  const [address, setAddress] = useState(customer?.address || "");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [optionState, setOptionState] = useState({
    isClicked: false,
    state: false,
  });
  const [option, setOption] = useState({ title: "", content: "", type: "" });

  const handleImageUpload = (e) => {
    const files = e.target.files;
    transformFile(files[0]);
  };

  const transformFile = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
    }
  };

  const handleChangeSubmit = async () => {
    try {
      const _id = customer?._id;
      const updatedCustomer = {
        _id,
        avatar,
        fullname,
        address,
        phoneNumber,
      };

      const result = await updateCustomer({ ...updatedCustomer });
      console.log(result);

      setIsModalOpen(true);
      if (result?.data) {
        setOption({
          title: "Success",
          content: "Your changes are saved!",
          type: "close",
        });

        dispatch(setCustomer({ customer: result?.data?.customer }));
      } else if (result?.error) {
        setOption({
          title: "Failed",
          content:
            "There is something wrong when saving your changes! Please try again",
          type: "close",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleOption = (isClicked, state) => {
    setOptionState({ isClicked, state });
  };

  useEffect(() => {
    if (optionState.isClicked) {
      setIsModalOpen(false);
      if (optionState.state) {
        handleChangeSubmit();
      }
    }
  }, [optionState]);

  return (
    <>
      <section className="profile-page-info">
        <form className="profile-page-info-form">
          <div className="profile-page-info-form-avatar">
            <input
              className="profile-page-info-form-avatar-selector btn btn--rounded"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
            {/* <img src={avatar} alt="avatar" /> */}
            <img src={Logo} alt="avatar" />
            <FaImages className="profile-page-info-form-avatar-change-icon" />
          </div>
          <div className="profile-page-info-form-info">
            <div className="profile-page-info-form-info-1">
                <div className="profile-page-info-form-info-1-username">
                  <label htmlFor="customer" className="form-label">
                    Username
                  </label>
                  <Input
                    type="text"
                    id="customer"
                    value={customer?.username || ""}
                    disabled
                  />
                </div>
                <div className="profile-page-info-form-info-1-fullname">
                  <label htmlFor="fullname" className="form-label">
                    Fullname
                  </label>
                  <Input
                    type="text"
                    id="fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </div>
            </div>
            <div className="profile-page-info-form-info-2">
              <div className="profile-page-info-form-info-2-phone">
                <label htmlFor="phone-number" className="form-label">
                  Phone number
                </label>
                <Input
                  type="number"
                  id="phone-number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="profile-page-info-form-info-2-address">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <Input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
          </div>
              <button
                className="profile-page-info-form-save-button btn btn--primary"
                onClick={(e) => {
                  e.preventDefault();
                  setIsModalOpen(true);
                  setOption({
                    title: "Save change",
                    content: "Are you sure to save these recently changes?",
                    type: "yes_no",
                  });
                }}
              >
                Save change
              </button>
        </form>
      </section>

      {isModalOpen && (
        <OptionModal
          title={option.title}
          content={option.content}
          optionType={option.type}
          handleOption={handleOption}
        />
      )}
    </>
  );
};

export default Information;
