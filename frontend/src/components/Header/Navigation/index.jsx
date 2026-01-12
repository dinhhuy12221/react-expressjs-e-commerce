import { MdMenu } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

import "./index.css";

export default function Navigation() {
  const [isOpenSidebarVal, setIsOpenSidebarVal] = useState(false);
  const sideBarRef = useRef(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
        setIsOpenSidebarVal(false);
      }
    }
    // Bind the event listener
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  }, [sideBarRef]);

  return (
    <nav className="navigate-wrapper">
        <div ref={sideBarRef} className="categories-wrapper">
          <button className="btn btn--primary categories-button"
            onClick={() => setIsOpenSidebarVal(!isOpenSidebarVal)}
          >
            <MdMenu className="icon" />
            <span className="text">ALL CATEGORIES</span>
            <FaAngleDown className="icon"/>
          </button>
          <div
            className={`sub-categories-section ${isOpenSidebarVal === true ? "open" : ""}`}
            onAbort={() => setIsOpenSidebarVal(false)}
          >
            <ul>
              <li>
                <Link to="#" className="btn">
                    Men
                    <FaAngleRight/>
                </Link>
                <div className="sub-categories">
                  <Link to="#" className="btn">
                    clothing
                  </Link>
                  <Link to="#" className="btn">
                    footwear
                  </Link>
                  <Link to="#" className="btn">
                    watches
                  </Link>
                  <Link to="#" className="btn">
                    clothing
                  </Link>
                  <Link to="#" className="btn">
                    footwear
                  </Link>
                </div>
              </li>
              <li>
                <Link to="#">
                  
                    Women
                    <FaAngleRight/>
                  
                </Link>
                <div className="sub-categories">
                  <Link to="#">
                    clothing
                  </Link>
                  <Link to="#">
                    footwear
                  </Link>
                  <Link to="#">
                    watches
                  </Link>
                  <Link to="#">
                    clothing
                  </Link>
                  <Link to="#">
                    footwear
                  </Link>
                </div>
              </li>
              <li>
                <Link to="#">
                  Beauty
                </Link>
              </li>
              <li>
                <Link to="#">
                  Watches
                </Link>
              </li>
              <li>
                <Link to="#">
                  Kids
                </Link>
              </li>
              <li>
                <Link to="#">
                  Gifts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      {/* <div className="categories-section"> */}
        <ul className="categories-section">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cat/men">
              Men
            </Link>
            <div className="sub-categories shadow">
              <Link to="#">
                clothing
              </Link>
              <Link to="#">
                footwear
              </Link>
              <Link to="#">
                watches
              </Link>
              <Link to="#">
                clothing
              </Link>
              <Link to="#">
                footwear
              </Link>
            </div>
          </li>
          <li>
            <Link to="/cat/women">
              Women
            </Link>
            <div className="sub-categories shadow">
              <Link to="#">
                clothing
              </Link>
              <Link to="#">
                footwear
              </Link>
              <Link to="#">
                watches
              </Link>
              <Link to="#">
                clothing
              </Link>
              <Link to="#">
                footwear
              </Link>
            </div>
          </li>
          <li>
            <Link to="/cat/beauty">
              Beauty
            </Link>
            <div className="sub-categories shadow">
              <Link to="#">
                clothing
              </Link>
              <Link to="#">
                footwear
              </Link>
              <Link to="#">
                watches
              </Link>
              <Link to="#">
                clothing
              </Link>
              <Link to="#">
                footwear
              </Link>
            </div>
          </li>
          <li>
            <Link to="/cat/watches">
              Watches
            </Link>
            <div className="sub-categories shadow">
              <Link to="#">
                clothing
              </Link>
              <Link to="#">
                footwear
              </Link>
              <Link to="#">
                watches
              </Link>
              <Link to="#">
                clothing
              </Link>
              <Link to="#">
                footwear
              </Link>
            </div>
          </li>
          <li>
            <Link to="/cat/kids">
              Kids
            </Link>
            <div className="sub-categories shadow">
              <Link to="#">
                clothing
              </Link>
              <Link to="#">
                footwear
              </Link>
              <Link to="#">
                watches
              </Link>
              <Link to="#">
                clothing
              </Link>
              <Link to="#">
                footwear
              </Link>
            </div>
          </li>
          <li>
            <Link to="/cat/gift">
              Gift
            </Link>
            <div className="sub-categories shadow">
              <Link to="#">
                clothing
              </Link>
              <Link to="#">
                footwear
              </Link>
              <Link to="#">
                watches
              </Link>
              <Link to="#">
                clothing
              </Link>
              <Link to="#">
                footwear
              </Link>
            </div>
          </li>
          <li>
            <Link to="#">
              Blog
            </Link>
          </li>
          <li>
            <Link to="#">
              Contact
            </Link>
          </li>
        </ul>
      {/* </div> */}
    </nav>
  );
}
