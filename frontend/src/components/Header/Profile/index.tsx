import React from "react";

import { useDispatch } from "react-redux";
import { logOut } from "~/features/auth/authSlice";
import { useLogoutMutation } from '~/features/auth/authApi';
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import './index.scss'

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ logout, { isLoading } ] = useLogoutMutation();

    const handleLogOut = async () => {
      try {
        await logout(null).unwrap()
      } catch (error) {

      } finally {
        dispatch(logOut())
        navigate(0)
      }
    }

  return (
    <div className="header-profile">
      <Link className='profile-link' to="/profile/information">
        <FaRegUserCircle />
      </Link>
      <button className="btn btn--outlined" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
}

export default Profile;
