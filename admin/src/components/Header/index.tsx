import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import button from "@mui/material/button";
import { MdExitToApp, MdMenu } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { MdOutlineMenuOpen } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { MdLockReset } from "react-icons/md";

// import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
// import Iconbutton from "@mui/material/Iconbutton";
// import Typography from "@mui/material/Typography";
// import Tooltip from "@mui/material/Tooltip";
// import PersonAdd from "@mui/icons-material/PersonAdd";
// import Settings from "@mui/icons-material/Settings";
// import Logout from "@mui/icons-material/Logout";
import { AdminContext } from "../../App";
import UserAvatarImg from "../UserAvatarImg";
import "./index.css";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpenNotificationDrop, setIsOpenNotificationDrop] = useState(null);
  const openMyAcc = Boolean(anchorEl);
  const openNotifications = Boolean(isOpenNotificationDrop);
  const navigate = useNavigate()

  const context = useContext(AdminContext);

  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };
  const handleOpenNotificationsDrop = (event) => {
    setIsOpenNotificationDrop(event.currentTarget);
  };
  const handleCloseNotificationsDrop = () => {
    setIsOpenNotificationDrop(null);
  };

  const getNotificationItems = () => {
    return new Array(10).fill(
      <MenuItem onClick={handleCloseNotificationsDrop}>
        <div className="header-notification-content-item">
          <img src="/public/logo192.png" />
          <div className="dropdownInfo d-flex flex-column justify-content-start ps-3 header-notification-content-main">
            <h4>
              <span>
                <b>Alue</b> added to her favorite list <b>Vengeance</b>
              </span>
            </h4>
            <p className="text-sky">few seconds ago!</p>
          </div>
        </div>
      </MenuItem>
    );
  };

  return (
    <header className="header">
      {context.windowWidth > 750 && (
        <div className="header-menu">
          <button
            className="rounded-circle"
            onClick={() => context.setIsToggleSidebar(!context.isToggleSidebar)}
          >
            {context.isToggleSidebar === false ? (
              <MdMenu />
            ) : (
              <MdOutlineMenuOpen />
            )}
          </button>
        </div>
      )}
      <Link to={"/"} className="header-logo">
        <img src="https://cdn-icons-png.flaticon.com/512/906/906343.png" />
        <span>ADMIN</span>
      </Link>

      <SearchBox />

      <div className="header-links">
        <button
          className="rounded-circle"
          onClick={() => context.setThemeMode(!context.themeMode)}
        >
          <MdOutlineLightMode />
        </button>
        {context.windowWidth > 750 && (
          <>
            <button className="rounded-circle">
              <IoGlobeOutline />
            </button>
            <button className="rounded-circle">
              <LuShoppingCart />
            </button>
            <button className="rounded-circle">
              <MdMailOutline />
            </button>
          </>
        )}
        <div className="header-notification">
          <button
            className="rounded-circle"
            onClick={handleOpenNotificationsDrop}
          >
            <GoBell />
          </button>
          {context.windowWidth <= 750 && (
            <button
              className="rounded-circle"
              onClick={() => context.openNav()}
            >
              <IoMenu />
            </button>
          )}
          <Menu
            anchorEl={isOpenNotificationDrop}
            className="header-notification-dropdown"
            // id="notifications"
            open={openNotifications}
            onClose={handleCloseNotificationsDrop}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <div className="header-notification-header">
              <h4>Orders (12)</h4>
            </div>
            <Divider />
            <div className="header-notification-content">
              {getNotificationItems().map((item) => item)}
            </div>
            <div className="header-notification-dropdown-buttons">
              <button className="header-notification-dropdown-buttons-view">
                View all notifications
              </button>
            </div>
          </Menu>
        </div>
        {context.isLogin === false ? (
          <div className="header-login">
            <Link to={"/login"}>
              <button className="header-login-button rounded-circle">
                Sign in
              </button>
            </Link>
          </div>
        ) : (
          <div className="header-profile">
            <button
              className="header-profile-info"
              onClick={handleOpenMyAccDrop}
            >
              <UserAvatarImg url={context.user?.image.url} />
            </button>
            <Menu
              className="header-profile-dropdown"
              anchorEl={anchorEl}
              id="account-menu"
              open={openMyAcc}
              onClose={handleCloseMyAccDrop}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem
                className="header-profile-dropdown-item"
                onClick={() => {
                  handleCloseMyAccDrop()
                  navigate("/profile")
                }}
              >
                <CgProfile />
                My Account
              </MenuItem>
              <MenuItem
                className="header-profile-dropdown-item"
                onClick={handleCloseMyAccDrop}
              >
                <MdLockReset />
                Reset Password
              </MenuItem>
              <MenuItem
                className="header-profile-dropdown-item"
                onClick={handleCloseMyAccDrop}
              >
                <MdExitToApp />
                Logout
              </MenuItem>
            </Menu>
          </div>
        )}
      </div>
    </header>
  );
}
