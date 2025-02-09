import './index.css'
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineRateReview } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { Link } from 'react-router-dom';
function ProfileSidebar() {
    return ( <div className="profile-sidebar">
        <ul>
            <Link to={'/profile/account'}><CgProfile /><span>Profile</span></Link>
            <Link to={'/profile/orders'}><FiShoppingCart /><span>Orders</span></Link>
            <Link to={'/profile/reviews'}><MdOutlineRateReview /><span>Reviews</span></Link>
            <Link to={'/profile/settings'}><CiSettings /><span>Settings</span></Link>
        </ul>
    </div> );
}

export default ProfileSidebar;