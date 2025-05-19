import './index.scss'
import { useDispatch } from "react-redux";
import { logOut } from "../../../features/auth/authSlice";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import Button from "../../Button";

function Profile() {
  const dispatch = useDispatch();
  return (
    <div className="header-profile">
      <Link className='profile-link' to="/profile/info">
        <FaRegUserCircle />
      </Link>
      <Button className="small" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
}

export default Profile;
