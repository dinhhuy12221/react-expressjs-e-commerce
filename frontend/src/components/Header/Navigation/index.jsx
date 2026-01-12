import { MdMenu } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { PiDressLight } from "react-icons/pi";
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
        <button
          className="btn btn--primary categories-button"
          onClick={() => setIsOpenSidebarVal(!isOpenSidebarVal)}
        >
          <MdMenu className="icon" />
          <span className="text">ALL CATEGORIES</span>
          <FaAngleDown className="icon" />
        </button>
        <div
          className={`sub-categories-section ${
            isOpenSidebarVal === true ? "sub-categories-section-show" : ""
          }`}
          onAbort={() => setIsOpenSidebarVal(false)}
        >
          <ul>
            <li>
              <Link to="#" className="btn">
                <span>Men</span>
                <FaAngleRight />
              </Link>
              <ul className="sub-categories">
                <li>
                  <Link to="#" className="btn">
                    <span>clothing</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="btn">
                    <span>footwear</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="btn">
                    <span>watches</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="btn">
                    <span>clothing</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="btn">
                    <span>footwear</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#" className="btn">
              <PiDressLight />
                <span>Women</span>
                <FaAngleRight />
              </Link>
              <ul className="sub-categories">
                <li>
                  <Link to="#" className="btn">
                    <span>clothing</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="btn">
                    <span>footwear</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="btn">
                    <span>watches</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="btn">
                    <span>clothing</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="btn">
                    <span>footwear</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#" className="btn">
                <span>Beauty</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="btn">
                <span>watches</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="btn">
                <span>Kids</span>
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
          <Link to="/cat/<span>Men</span>" className="btn">
            <span>Men</span>
          </Link>
          <div className="sub-categories shadow">
            <Link to="#" className="btn">
              <span>clothing</span>
            </Link>
            <Link to="#" className="btn">
              <span>footwear</span>
            </Link>
            <Link to="#" className="btn">
              <span>watches</span>
            </Link>
            <Link to="#" className="btn">
              <span>clothing</span>
            </Link>
            <Link to="#" className="btn">
              <span>footwear</span>
            </Link>
          </div>
        </li>
        <li>
          <Link to="/cat/<span>Women</span>" className="btn">
            <span>Women</span>
          </Link>
          <div className="sub-categories shadow">
            <Link to="#" className="btn">
              <span>clothing</span>
            </Link>
            <Link to="#" className="btn">
              <span>footwear</span>
            </Link>
            <Link to="#" className="btn">
              <span>watches</span>
            </Link>
            <Link to="#" className="btn">
              <span>clothing</span>
            </Link>
            <Link to="#" className="btn">
              <span>footwear</span>
            </Link>
          </div>
        </li>
        <li>
          <Link to="/cat/<span>Beauty</span>" className="btn">
            <span>Beauty</span>
          </Link>
          <div className="sub-categories shadow">
            <Link to="#" className="btn">
              <span>clothing</span>
            </Link>
            <Link to="#" className="btn">
              <span>footwear</span>
            </Link>
            <Link to="#" className="btn">
              <span>watches</span>
            </Link>
            <Link to="#" className="btn">
              <span>clothing</span>
            </Link>
            <Link to="#" className="btn">
              <span>footwear</span>
            </Link>
          </div>
        </li>
        <li>
          <Link to="/cat/<span>watches</span>" className="btn">
            <span>watches</span>
          </Link>
          <div className="sub-categories shadow">
            <Link to="#" className="btn">
              <span>clothing</span>
            </Link>
            <Link to="#" className="btn">
              <span>footwear</span>
            </Link>
            <Link to="#" className="btn">
              <span>watches</span>
            </Link>
            <Link to="#" className="btn">
              <span>clothing</span>
            </Link>
            <Link to="#" className="btn">
              <span>footwear</span>
            </Link>
          </div>
        </li>
        <li>
          <Link to="/cat/<span>Kids</span>" className="btn">
            <span>Kids</span>
          </Link>
          <div className="sub-categories shadow">
            <Link to="#" className="btn">
              <span>clothing</span>
            </Link>
            <Link to="#" className="btn">
              <span>footwear</span>
            </Link>
            <Link to="#" className="btn">
              <span>watches</span>
            </Link>
            <Link to="#" className="btn">
              <span>clothing</span>
            </Link>
            <Link to="#" className="btn">
              <span>footwear</span>
            </Link>
          </div>
        </li>
        <li>
          <Link to="/cat/<span>Gift</span>" className="btn">
            <span>Gift</span>
          </Link>
          <div className="sub-categories shadow">
            <Link to="#" className="btn">
              <span>clothing</span>
            </Link>
            <Link to="#" className="btn">
              <span>footwear</span>
            </Link>
            <Link to="#" className="btn">
              <span>watches</span>
            </Link>
            <Link to="#" className="btn">
              <span>clothing</span>
            </Link>
            <Link to="#" className="btn">
              <span>footwear</span>
            </Link>
          </div>
        </li>
        <li>
          <Link to="#" className="btn">
            <span>Blog</span>
          </Link>
        </li>
        <li>
          <Link to="#" className="btn">
            <span>Contact</span>
          </Link>
        </li>
      </ul>
      {/* </div> */}
    </nav>
  );
}
