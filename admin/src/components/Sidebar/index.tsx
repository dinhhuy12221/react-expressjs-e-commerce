import { useState, useContext } from "react";
import { MdDashboard } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { BsFillXDiamondFill } from "react-icons/bs";
import { IoCartSharp } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { AdminContext } from "../../App";
import { BiSolidCategory } from "react-icons/bi";

import "./index.css";
import Header from "../Header";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState(0);
  const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

  const context = useContext(AdminContext);

  const isOpenSubmenu = (index) => {
    setActiveTab(index);
    setIsToggleSubmenu(!isToggleSubmenu);
  };
  return (
    <div className="sidebar">
      {context.isHideSidebarAndHeader === false && <Header />}
      {context.isHideSidebarAndHeader === false && (
        <div>
          <div
            className={`sidebar-overlay ${
              context.isOpenNav === true && "show"
            }`}
            onClick={() => context.setIsOpenNav(!context.isOpenNav)}
          ></div>
          <div
            className={`sidebar-wrapper ${
              context.isToggleSidebar === true ? "toggle" : ""
            } ${context.isOpenNav === true ? "open" : ""}`}
          >
            <ul>
              <li>
                <Link to="/">
                  <button
                    className={`w-100 ${
                      activeTab === 0 && isToggleSubmenu === true
                        ? "active"
                        : ""
                    }`}
                    onClick={() => isOpenSubmenu(0)}
                  >
                    <span className="sidebar-wrapper-icon">
                      <MdDashboard />
                      Dashboard
                    </span>
                    <span className="sidebar-wrapper-arrow">
                      <IoIosArrowForward />
                    </span>
                  </button>
                </Link>
              </li>
              <li>
                <button
                  className={`w-100 ${
                    activeTab === 1 && isToggleSubmenu ? "active" : ""
                  }`}
                  onClick={() => isOpenSubmenu(1)}
                >
                  <span className="icon">
                    <BsFillXDiamondFill />
                  </span>
                  Products
                  <span className="arrow">
                    <IoIosArrowForward />
                  </span>
                </button>
                <div
                  className={`sidebar-wrapper-menu ${
                    activeTab === 1 && isToggleSubmenu === true
                      ? "collapse"
                      : "collapsed"
                  }`}
                >
                  <ul className="sidebar-wrapper-menu-submenu">
                    <li>
                      <Link to="/products">Product List</Link>
                    </li>
                    <li>
                      <Link to="/product/view">Product View</Link>
                    </li>
                    <li>
                      <Link to="/product/upload">Product Upload</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/categories">
                  <button
                    className={`w-100 ${activeTab === 2 ? "active" : ""}`}
                    onClick={() => isOpenSubmenu(2)}
                  >
                    <span className="icon">
                      <BiSolidCategory />
                    </span>
                    Categories
                    <span className="arrow"></span>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <button
                    className={`w-100 ${activeTab === 3 ? "active" : ""}`}
                  >
                    <span className="icon">
                      <IoCartSharp />
                    </span>
                    Orders
                    <span className="arrow">
                      <IoIosArrowForward />
                    </span>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <button
                    className={`w-100 ${activeTab === 4 ? "active" : ""}`}
                  >
                    <span className="icon">
                      <RiMessage2Fill />
                    </span>
                    Messages
                    <span className="arrow">
                      <IoIosArrowForward />
                    </span>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <button
                    className={`w-100 ${activeTab === 5 ? "active" : ""}`}
                  >
                    <span className="icon">
                      <IoMdNotifications />
                    </span>
                    Notifications
                    <span className="arrow">
                      <IoIosArrowForward />
                    </span>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <button
                    className={`w-100 ${activeTab === 6 ? "active" : ""}`}
                  >
                    <span className="icon">
                      <IoMdSettings />
                    </span>
                    Settings
                    <span className="arrow">
                      <IoIosArrowForward />
                    </span>
                  </button>
                </Link>
              </li>
            </ul>

            <br />

            <div className="sidebar-wrapper-logout">
              <button>
                <IoLogOutOutline />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
