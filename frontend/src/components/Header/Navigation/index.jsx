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
                <Link to="#" className="btn">
                  
                    Women
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
                <Link to="#" className="btn">
                  Beauty
                </Link>
              </li>
              <li>
                <Link to="#" className="btn">
                  Watches
                </Link>
              </li>
              <li>
                <Link to="#" className="btn">
                  Kids
                </Link>
              </li>
              <li>
                <Link to="#" className="btn">
                  Gifts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      {/* <div className="categories-section"> */}
        <ul className="categories-section">
          <li>
            <Link to="/" className="btn">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cat/men" className="btn">
              Men
            </Link>
            <div className="sub-categories shadow">
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
            <Link to="/cat/women" className="btn">
              Women
            </Link>
            <div className="sub-categories shadow">
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
            <Link to="/cat/beauty" className="btn">
              Beauty
            </Link>
            <div className="sub-categories shadow">
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
            <Link to="/cat/watches" className="btn">
              Watches
            </Link>
            <div className="sub-categories shadow">
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
            <Link to="/cat/kids" className="btn">
              Kids
            </Link>
            <div className="sub-categories shadow">
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
            <Link to="/cat/gift" className="btn">
              Gift
            </Link>
            <div className="sub-categories shadow">
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
            <Link to="#" className="btn">
              Blog
            </Link>
          </li>
          <li>
            <Link to="#" className="btn">
              Contact
            </Link>
          </li>
        </ul>
      {/* </div> */}
    </nav>
  );
}
