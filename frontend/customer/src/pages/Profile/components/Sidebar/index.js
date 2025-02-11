import "./index.css";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineRateReview } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from "react";
function ProfileSidebar() {
    const [isActive, setIsActive] = useState(0);

  return (
    <div className="profile-sidebar">
      <ul>
        <li onClick={() => setIsActive(0)}
            className={isActive === 0 && 'active'}>
          <Link to={"/profile/info"}>
            <CgProfile />
            <span>Profile</span>
          </Link>
        </li>
        <li onClick={() => setIsActive(1)}
            className={isActive === 1 && 'active'}>
          <Link to={"/profile/orders"}>
            <FiShoppingCart />
            <span>Orders</span>
          </Link>
        </li>
        <li onClick={() => setIsActive(2)}
            className={isActive === 2 && 'active'}>
          <Link to={"/profile/reviews"}>
            <MdOutlineRateReview />
            <span>Reviews</span>
          </Link>
        </li>
        <li onClick={() => setIsActive(3)}
            className={isActive === 3 && 'active'}>
          <Link to={"/profile/settings"}>
            <CiSettings />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ProfileSidebar;
