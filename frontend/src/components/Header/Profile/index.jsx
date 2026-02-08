import './index.scss'
import { useDispatch } from "react-redux";
import { logOut } from "~/features/auth/authSlice";
import { useLogoutMutation } from '~/features/auth/authApi';
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import Button from "~/components/Button";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ logout, { isLoading } ] = useLogoutMutation();

    const handleLogOut = async () => {
      try {
        await logout().unwrap()
      } catch (error) {

      } finally {
        dispatch(logOut())
        navigate('/')
      }
    }

  return (
    <div className="header-profile">
      <Link className='profile-link' to="/profile/information">
        <FaRegUserCircle />
      </Link>
      <Button className="small" onClick={handleLogOut}>
        Logout
      </Button>
    </div>
  );
}

export default Profile;
