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
      className={`sidebar${context.isToggleSidebar === true ? " toggle" : ""} ${
        context.isOpenNav === true ? " open" : ""
      }`}
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
              <IoIosArrowForward className="sidebar-item-arrow" />
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
            <IoIosArrowForward className="sidebar-item-arrow" />
          </button>
          <ul
            className={`sidebar-item-menu ${
              activeTab === 1 && isToggleSubmenu === true ? "" : "collapsed"
            }`}
          >
            <li>
              <Link to="/products">Product List</Link>
            </li>
            <li>
              <Link to="/product/upload">Product Upload</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/categories-brands">
            <button
              className={`sidebar-item ${activeTab === 2 ? "active" : ""}`}
              onClick={() => isOpenSubmenu(2)}
            >
              <BiSolidCategory />
              Categories & Brands
              <IoIosArrowForward className="sidebar-item-arrow" />
            </button>
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <button
              className={`sidebar-item ${activeTab === 4 ? "active" : ""}`}
              onClick={() => isOpenSubmenu(4)}
            >
              <IoCartSharp />
              Orders
              <IoIosArrowForward className="sidebar-item-arrow" />
            </button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <button
              className={`sidebar-item ${activeTab === 5 ? "active" : ""}`}
              onClick={() => isOpenSubmenu(5)}
            >
              <RiMessage2Fill />
              Messages
              <IoIosArrowForward className="sidebar-item-arrow" />
            </button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <button
              className={`sidebar-item ${activeTab === 6 ? "active" : ""}`}
              onClick={() => isOpenSubmenu(6)}
            >
              <IoMdNotifications />
              Notifications
              <IoIosArrowForward className="sidebar-item-arrow" />
            </button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <button
              className={`sidebar-item ${activeTab === 7 ? "active" : ""}`}
              onClick={() => isOpenSubmenu(7)}
            >
              <IoMdSettings />
              Settings
              <IoIosArrowForward className="sidebar-item-arrow" />
            </button>
          </Link>
        </li>
      </ul>

      <button className="sidebar-logout">
        <IoLogOutOutline />
        Logout
      </button>
      {/* </div> */}
      {/* )} */}
    </div>
  );
}
