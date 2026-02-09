import React from "react";

import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineRateReview } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(0);

  return (
    <div className="profile-page-sidebar">
      {/* <ul>
        <li
          onClick={() => setIsActive(0)}
          className={isActive === 0 ? "active" : ""}
        > */}
      <Link
        to={"/profile/information"}
        onClick={() => setIsActive(0)}
        className={`profile-page-sidebar-item ${isActive === 0 ? "active" : ""}`}
      >
        <CgProfile />
        <span>Profile</span>
      </Link>
      {/* </li> */}
      {/* <li
          onClick={() => setIsActive(1)}
          className={isActive === 1 ? "active" : ""}
        > */}
      <Link
        to={"/profile/cart"}
        onClick={() => setIsActive(1)}
        className={`profile-page-sidebar-item ${isActive === 1 ? "active" : ""}`}
      >
        <FiShoppingCart />
        <span>Cart</span>
      </Link>
      <Link
        to={"/profile/wishlist"}
        onClick={() => setIsActive(2)}
        className={`profile-page-sidebar-item ${isActive === 3 ? "active" : ""}`}
      >
        <FiShoppingCart />
        <span>Wishlist</span>
      </Link>
      <Link
        to={"/profile/reviews"}
        onClick={() => setIsActive(3)}
        className={`profile-page-sidebar-item ${isActive === 24 ? "active" : ""}`}
      >
        <MdOutlineRateReview />
        <span>Reviews</span>
      </Link>
      <Link
        to={"/profile/settings"}
        onClick={() => setIsActive(4)}
        className={`profile-page-sidebar-item ${isActive === 5? "active" : ""}`}
      >
        <CiSettings />
        <span>Settings</span>
      </Link>
      {/* </li>
      </ul> */}
    </div>
  );
};

export default Sidebar;
