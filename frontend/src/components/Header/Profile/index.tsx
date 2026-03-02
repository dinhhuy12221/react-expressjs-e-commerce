import React, { useContext, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { logOut, selectCurrentCustomerId } from "~/features/auth/authSlice";
import { useLogoutMutation } from "~/features/auth/authApi";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { MyContext } from "~/App";

import "./index.css";

function Profile() {
  const customerId = useSelector(selectCurrentCustomerId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const { setIsLoading } = useContext(MyContext);

  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogOut = async () => {
    try {
      await logout(null).unwrap();
      dispatch(logOut());
      navigate(0);
    } catch (error) {
    }
  };

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading]);

  return (
    <div className="header-profile">
      <button className="header-profile-button" onClick={() => setIsActive(!isActive)}>
        <FaRegUserCircle />
      </button>
      {isActive && <div className="header-profile-dropbox">
        {
          customerId ? (
            <>
              <button className="header-profile-dropbox-item" onClick={() => navigate("/profile/information")}>Profile</button>
              <button className="header-profile-dropbox-item" onClick={handleLogOut}>Logout
          </button>
            </>
          ) : <button className="header-profile-dropbox-item" onClick={() => navigate("/login")}>Signin</button>
        }
      </div>}
    </div>
  );
}

export default Profile;
