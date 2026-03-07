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

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState(0);
  const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

  const context = useContext(AdminContext);

  const isOpenSubmenu = (index) => {
    setActiveTab(index);
    setIsToggleSubmenu(!isToggleSubmenu);
  };
  return (
    // <div className="sidebar">
    //   {/* {context.isHideSidebarAndHeader === false && ( */}
    //   <button
    //         className={`sidebar-overlay ${
    //           context.isOpenNav === true && "show"
    //         }`}
    //         onClick={() => context.setIsOpenNav(!context.isOpenNav)}
    //       >aaa</button>
      <div
        className={`sidebar${
          context.isToggleSidebar === true ? " toggle" : ""
        } ${context.isOpenNav === true ? " open" : ""}`}
      >
        <ul>
          <li>
            <Link to="/">
              <button
                className={`sidebar-item ${
                  activeTab === 0 && isToggleSubmenu === true ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(0)}
              >
                  <MdDashboard />
                  Dashboard
                  <IoIosArrowForward />
              </button>
            </Link>
          </li>
          <li>
            <button
              className={`sidebar-item ${
                activeTab === 1 && isToggleSubmenu ? "active" : ""
              }`}
              onClick={() => isOpenSubmenu(1)}
            >
                <BsFillXDiamondFill />
              Products
                <IoIosArrowForward />
            </button>
            <div
              className={`sidebar-menu ${
                activeTab === 1 && isToggleSubmenu === true
                  ? "collapse"
                  : "collapsed"
              }`}
            >
              <ul className="sidebar-menu-submenu">
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
                className={`sidebar-item ${activeTab === 2 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(2)}
              >
                  <BiSolidCategory />
                Categories
                
                <IoIosArrowForward />
              </button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <button className={`sidebar-item ${activeTab === 3 ? "active" : ""}`}>
                  <IoCartSharp />
                Orders
                  <IoIosArrowForward />
              </button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <button className={`sidebar-item ${activeTab === 4 ? "active" : ""}`}>
                  <RiMessage2Fill />
                Messages
                  <IoIosArrowForward />
              </button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <button className={`sidebar-item ${activeTab === 5 ? "active" : ""}`}>
                  <IoMdNotifications />
                Notifications
                  <IoIosArrowForward />
              </button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <button className={`sidebar-item ${activeTab === 6 ? "active" : ""}`}>
                  <IoMdSettings />
                Settings
                  <IoIosArrowForward />
              </button>
            </Link>
          </li>
        </ul>

        <br />

        <div className="sidebar-logout">
          <button>
            <IoLogOutOutline />
            Logout
          </button>
        </div>
      {/* </div> */}
      {/* )} */}
    </div>
  );
}
