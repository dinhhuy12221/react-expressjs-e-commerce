import './index.css'
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineRateReview } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
function ProfileSidebar() {
    return ( <div className="profile-sidebar">
        <ul>
            <li><CgProfile /><span>Profile</span></li>
            <li><FiShoppingCart /><span>Orders</span></li>
            <li><MdOutlineRateReview /><span>Reviews</span></li>
            <li><CiSettings /><span>Settings</span></li>
        </ul>
    </div> );
}

export default ProfileSidebar;