import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentCustomer, setCustomer } from "../../../../features/auth/authSlice";
import { FaImages } from "react-icons/fa";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { useEffect, useState } from "react";
import { useUpdateCustomerMutation } from "../../../../features/customer/customerApi";
import OptionModal from "../../../../components/OptionModal";

function Account() {
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
      const _id = customer?._id
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
        
        await dispatch(setCustomer({ customer: result?.data?.customer }))

      } else if (result?.error){
        setOption({
          title: "Failed",
          content: "There is something wrong when saving your changes! Please try again",
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
                  <Input
                    type="text"
                    id="customer"
                    value={customer?.username || ""}
                    disabled
                  />
                </div>
                <div className="form-group mb-3">
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
            </div>
            <div className="form-group mb-3 col-sm-12">
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
            <div className="form-group mb-3 col-sm-12">
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
            <Button
              type="button"
              className="small col-md-2 col-sm-12"
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
            </Button>
          </div>
        </form>
      </div>

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
}

export default Account;
