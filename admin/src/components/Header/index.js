import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { MdMenu } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { MdOutlineMenuOpen } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { MdDarkMode } from "react-icons/md";
import { MdLockReset } from "react-icons/md";

import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { MyContext } from "../../App";
import UserAvatarImg from "../UserAvatarImg";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpenNotificationDrop, setIsOpenNotificationDrop] = useState(null);
  const openMyAcc = Boolean(anchorEl);
  const openNotifications = Boolean(isOpenNotificationDrop);

  const context = useContext(MyContext);

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

  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex flex-row align-items-center w-100 ">
            <div className="col-sm-2 part1">
              <Link to={"/"} className="logo d-flex align-items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/906/906343.png" />
                <span className="ms-2">HOTASH</span>
              </Link>
            </div>

            {context.windowWidth > 750 && (
              <div className="col-sm-3 d-flex align-items-center part2 res-hide">
                <Button
                  className="rounded-circle"
                  onClick={() =>
                    context.setIsToggleSidebar(!context.isToggleSidebar)
                  }
                >
                  {context.isToggleSidebar === false ? (
                    <MdOutlineMenuOpen />
                  ) : (
                    <MdMenu />
                  )}
                </Button>
                <SearchBox />
              </div>
            )}

            <div className="col-sm-7 d-flex align-items-center justify-content-end part3 pe-0">
              <Button
                className="rounded-circle"
                onClick={() => context.setThemeMode(!context.themeMode)}
              >
                <MdOutlineLightMode />
              </Button>
              {context.windowWidth > 750 && (
                <>
                  <Button className="rounded-circle">
                    <IoGlobeOutline />
                  </Button>
                  <Button className="rounded-circle">
                    <LuShoppingCart />
                  </Button>
                  <Button className="rounded-circle">
                    <MdMailOutline />
                  </Button>
                </>
              )}
              <div className="dropDownWrapper">
                <Button
                  className="rounded-circle"
                  onClick={handleOpenNotificationsDrop}
                >
                  <GoBell />
                </Button>
                {context.windowWidth <= 750 && (
                  <Button
                    className="rounded-circle"
                    onClick={() => context.openNav()}
                  >
                    <IoMenu />
                  </Button>
                )}
                <Menu
                  anchorEl={isOpenNotificationDrop}
                  className="notifications dropdown_list"
                  id="notifications"
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
                  <div className="head pt-3 sticky-top">
                    <h4 className="ps-3">Orders (12)</h4>
                  </div>
                  <Divider className="" />
                  <div className="scroll">
                    <MenuItem onClick={handleCloseNotificationsDrop}>
                      <div className="d-flex">
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCd1UseTiu5jdfYlwj_wovw4r7TtuWONyLBQ&s" />
                          </span>
                        </div>
                        <div className="dropdownInfo d-flex flex-column justify-content-start ps-3">
                          <h4>
                            <span>
                              <b>Alue</b> added to her favorite list{" "}
                              <b>Vengeance</b>
                            </span>
                          </h4>
                          <p className="text-sky">few seconds ago!</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotificationsDrop}>
                      <div className="d-flex">
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCd1UseTiu5jdfYlwj_wovw4r7TtuWONyLBQ&s" />
                          </span>
                        </div>
                        <div className="dropdownInfo d-flex flex-column justify-content-start ps-3">
                          <h4>
                            <span>
                              <b>Alue</b> added to her favorite list{" "}
                              <b>Vengeance</b>
                            </span>
                          </h4>
                          <p className="text-sky">few seconds ago!</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotificationsDrop}>
                      <div className="d-flex">
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCd1UseTiu5jdfYlwj_wovw4r7TtuWONyLBQ&s" />
                          </span>
                        </div>
                        <div className="dropdownInfo d-flex flex-column justify-content-start ps-3">
                          <h4>
                            <span>
                              <b>Alue</b> added to her favorite list{" "}
                              <b>Vengeance</b>
                            </span>
                          </h4>
                          <p className="text-sky">few seconds ago!</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotificationsDrop}>
                      <div className="d-flex">
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCd1UseTiu5jdfYlwj_wovw4r7TtuWONyLBQ&s" />
                          </span>
                        </div>
                        <div className="dropdownInfo d-flex flex-column justify-content-start ps-3">
                          <h4>
                            <span>
                              <b>Alue</b> added to her favorite list{" "}
                              <b>Vengeance</b>
                            </span>
                          </h4>
                          <p className="text-sky">few seconds ago!</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotificationsDrop}>
                      <div className="d-flex">
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCd1UseTiu5jdfYlwj_wovw4r7TtuWONyLBQ&s" />
                          </span>
                        </div>
                        <div className="dropdownInfo d-flex flex-column justify-content-start ps-3">
                          <h4>
                            <span>
                              <b>Alue</b> added to her favorite list{" "}
                              <b>Vengeance</b>
                            </span>
                          </h4>
                          <p className="text-sky">few seconds ago!</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotificationsDrop}>
                      <div className="d-flex">
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCd1UseTiu5jdfYlwj_wovw4r7TtuWONyLBQ&s" />
                          </span>
                        </div>
                        <div className="dropdownInfo d-flex flex-column justify-content-start ps-3">
                          <h4>
                            <span>
                              <b>Alue</b> added to her favorite list{" "}
                              <b>Vengeance</b>
                            </span>
                          </h4>
                          <p className="text-sky">few seconds ago!</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotificationsDrop}>
                      <div className="d-flex">
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCd1UseTiu5jdfYlwj_wovw4r7TtuWONyLBQ&s" />
                          </span>
                        </div>
                        <div className="dropdownInfo d-flex flex-column justify-content-start ps-3">
                          <h4>
                            <span>
                              <b>Alue</b> added to her favorite list{" "}
                              <b>Vengeance</b>
                            </span>
                          </h4>
                          <p className="text-sky">few seconds ago!</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotificationsDrop}>
                      <div className="d-flex">
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCd1UseTiu5jdfYlwj_wovw4r7TtuWONyLBQ&s" />
                          </span>
                        </div>
                        <div className="dropdownInfo d-flex flex-column justify-content-start ps-3">
                          <h4>
                            <span>
                              <b>Alue</b> added to her favorite list{" "}
                              <b>Vengeance</b>
                            </span>
                          </h4>
                          <p className="text-sky">few seconds ago!</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotificationsDrop}>
                      <div className="d-flex">
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCd1UseTiu5jdfYlwj_wovw4r7TtuWONyLBQ&s" />
                          </span>
                        </div>
                        <div className="dropdownInfo d-flex flex-column justify-content-start ps-3">
                          <h4>
                            <span>
                              <b>Alue</b> added to her favorite list{" "}
                              <b>Vengeance</b>
                            </span>
                          </h4>
                          <p className="text-sky">few seconds ago!</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotificationsDrop}>
                      <div className="d-flex">
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCd1UseTiu5jdfYlwj_wovw4r7TtuWONyLBQ&s" />
                          </span>
                        </div>
                        <div className="dropdownInfo d-flex flex-column justify-content-start ps-3">
                          <h4>
                            <span>
                              <b>Alue</b> added to her favorite list{" "}
                              <b>Vengeance</b>
                            </span>
                          </h4>
                          <p className="text-sky">few seconds ago!</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotificationsDrop}>
                      <div className="d-flex">
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCd1UseTiu5jdfYlwj_wovw4r7TtuWONyLBQ&s" />
                          </span>
                        </div>
                        <div className="dropdownInfo d-flex flex-column justify-content-start ps-3">
                          <h4>
                            <span>
                              <b>Alue</b> added to her favorite list{" "}
                              <b>Vengeance</b>
                            </span>
                          </h4>
                          <p className="text-sky">few seconds ago!</p>
                        </div>
                      </div>
                    </MenuItem>
                  </div>
                  <div className="ps-2 pe-2 pt-2 w-100">
                    <Button className="btn-blue w-100">
                      View all notifications
                    </Button>
                  </div>
                </Menu>
              </div>
              {context.isLogin === false ? (
                <Link to={"/login"}>
                  <Button className="btn-blue btn-lg btn-round">Sign in</Button>
                </Link>
              ) : (
                <div className="myAccWrapper">
                  <Button
                    className="myAcc d-flex align-items-center"
                    onClick={handleOpenMyAccDrop}
                  >
                    {/* <UserAvatarImg
                      imgUrl={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCd1UseTiu5jdfYlwj_wovw4r7TtuWONyLBQ"
                      }
                    /> */}

                    <div className="userInfo res-hide">
                      <h4>aLue</h4>
                      <p className="mb-0">@aLue35</p>
                    </div>
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={openMyAcc}
                    onClose={handleCloseMyAccDrop}
                    //   onClick={handleCloseMyAccDrop}
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
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <ListItemIcon>
                        <PersonAdd fontSize="small" />
                      </ListItemIcon>
                      My Account
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <ListItemIcon>
                        <MdLockReset />
                      </ListItemIcon>
                      Reset Password
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
