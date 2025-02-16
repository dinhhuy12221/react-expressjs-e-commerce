import "./index.css";
import { useSelector } from "react-redux";
import { selectCurrentCustomer } from "../../../../features/auth/authSlice";
import { FaImages } from "react-icons/fa";
import InputField from "../../../../components/InputField";
import { useEffect, useState } from "react";
import { useUpdateCustomerMutation } from "../../../../features/customer/customerApi";
import OptionModal from "../../../../components/OptionModal";

function Account() {
  const customer = useSelector(selectCurrentCustomer);
  const [updateCustomer, { isLoading }] = useUpdateCustomerMutation();

  const [avatar, setAvatar] = useState(customer?.avatar);
  const [fullname, setFullname] = useState(customer?.fullname);
  const [phoneNumber, setPhoneNumber] = useState(customer?.phone_number);
  const [address, setAddress] = useState(customer?.address);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [option, setOption] = useState({ isClicked: false, option: false });

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

  const handleOption = (isClicked, option) => {
    setOption({ isClicked, option })
  }

  const handleChangeSubmit = async () => {
    try {
      const updatedCustomer = {
        ...customer,
        avatar,
        fullname,
        address,
        phoneNumber,
      };

      console.log(updatedCustomer);

      // const result = await updateCustomer({ ...updatedCustomer });
      // if (result) {
      // }
      
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (option.isClicked) {
      setIsModalOpen(false);
      if (option.option) {
        handleChangeSubmit();
      }
    }
  }, [option])

  return (
    <>
      

      <div className="profile-info">
        <form className="row">
          <div className="col-md-6">
            <div className="row mb-3">
              <div className="avatar-container col-sm-4">
                <div className="avatar">
                  <input
                    className="avatar-chooser"
                    type="file"
                    accept="avatar/png, avatar/jpeg"
                    onChange={handleImageUpload}
                  />
                  <img src={avatar} alt="avatar" />
                  <span className="change-icon">
                    <FaImages />
                  </span>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="form-group mb-3">
                  <label htmlFor="customer" className="form-label">
                    Username
                  </label>
                  <InputField
                    type="text"
                    id="customer"
                    value={customer?.username}
                    disabled
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="fullname" className="form-label">
                    Fullname
                  </label>
                  <InputField
                    type="text"
                    id="fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="form-group mb-3 col-sm-12">
              <label htmlFor="phone-number" className="form-label">
                Phone number
              </label>
              <InputField
                type="number"
                id="phone-number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-group mb-3 col-sm-12">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <InputField
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary col-md-2 col-sm-12"
              onClick={(e) => {
                e.preventDefault();
                setIsModalOpen(true)
              }}
            >
              Save change
            </button>
          </div>
        </form>
      </div>

      {isModalOpen && (
        <OptionModal
          title="Save change"
          content="Are you sure to save these recently changes?"
          optionType={"yes_no"}
          handleOption={handleOption}
        />
      )}
    </>
  );
}

export default Account;
