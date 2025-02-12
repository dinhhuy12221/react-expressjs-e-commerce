import { useDispatch } from "react-redux";
import { logOut } from "../../../features/auth/authSlice";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { FaRegUserCircle } from "react-icons/fa";
function Profile({ customer }) {
    const dispatch = useDispatch();
  return (
    <div>
        <Link to="/profile/info">
      <Button className="circle me-3">
        <FaRegUserCircle />
      </Button>
    </Link>
    <Button  onClick={() => dispatch(logOut())}>Logout</Button>
    </div>
  );
}

export default Profile;
