import { MdMenu } from "react-icons/md";
// import { FaAngleDown } from "react-icons/fa";
// import { HiOutlineHome } from "react-icons/hi2";
import { FaAngleRight } from "react-icons/fa6";

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
      <div className="category">
        <div ref={sideBarRef} className="catWrapper">
          <button className="btn allCatTab"
            onClick={() => setIsOpenSidebarVal(!isOpenSidebarVal)}
          >
            <MdMenu className="icon" />
            <span className="text">CATEGORIES</span>
          </button>
          <div
            className={`sidebarNav ${isOpenSidebarVal === true ? "open" : ""}`}
            onAbort={() => setIsOpenSidebarVal(false)}
          >
            <ul>
              <li>
                <Link to="#">
                  <button className="btn">
                    Men
                    <FaAngleRight className="ms-auto" />
                  </button>
                </Link>
                <div className="submenu">
                  <Link to="#">
                    <button className="btn">clothing</button>
                  </Link>
                  <Link to="#">
                    <button className="btn">footwear</button>
                  </Link>
                  <Link to="#">
                    <button className="btn">watches</button>
                  </Link>
                  <Link to="#">
                    <button className="btn">clothing</button>
                  </Link>
                  <Link to="#">
                    <button className="btn">footwear</button>
                  </Link>
                </div>
              </li>
              <li>
                <Link to="#">
                  <button className="btn">
                    Women
                    <FaAngleRight className="ms-auto" />
                  </button>
                </Link>
                <div className="submenu">
                  <Link to="#">
                    <button className="btn">clothing</button>
                  </Link>
                  <Link to="#">
                    <button className="btn">footwear</button>
                  </Link>
                  <Link to="#">
                    <button className="btn">watches</button>
                  </Link>
                  <Link to="#">
                    <button className="btn">clothing</button>
                  </Link>
                  <Link to="#">
                    <button className="btn">footwear</button>
                  </Link>
                </div>
              </li>
              <li>
                <Link to="#">
                  <button className="btn">Beauty</button>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <button className="btn">Watches</button>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <button className="btn">Kids</button>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <button className="btn">Gifts</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navPart2 d-flex justify-content-end">
        <ul className="list list-inline">
          <li className="list-inline-item">
            <Link to="/">
              <button className="btn">Home</button>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="/cat/men">
              <button className="btn">Men</button>
            </Link>
            <div className="submenu shadow">
              <Link to="#">
                <button className="btn">clothing</button>
              </Link>
              <Link to="#">
                <button className="btn">footwear</button>
              </Link>
              <Link to="#">
                <button className="btn">watches</button>
              </Link>
              <Link to="#">
                <button className="btn">clothing</button>
              </Link>
              <Link to="#">
                <button className="btn">footwear</button>
              </Link>
            </div>
          </li>
          <li className="list-inline-item">
            <Link to="/cat/women">
              <button className="btn">Women</button>
            </Link>
            <div className="submenu shadow">
              <Link to="#">
                <button className="btn">clothing</button>
              </Link>
              <Link to="#">
                <button className="btn">footwear</button>
              </Link>
              <Link to="#">
                <button className="btn">watches</button>
              </Link>
              <Link to="#">
                <button className="btn">clothing</button>
              </Link>
              <Link to="#">
                <button className="btn">footwear</button>
              </Link>
            </div>
          </li>
          <li className="list-inline-item">
            <Link to="/cat/beauty">
              <button className="btn">Beauty</button>
            </Link>
            <div className="submenu shadow">
              <Link to="#">
                <button className="btn">clothing</button>
              </Link>
              <Link to="#">
                <button className="btn">footwear</button>
              </Link>
              <Link to="#">
                <button className="btn">watches</button>
              </Link>
              <Link to="#">
                <button className="btn">clothing</button>
              </Link>
              <Link to="#">
                <button className="btn">footwear</button>
              </Link>
            </div>
          </li>
          <li className="list-inline-item">
            <Link to="/cat/watches">
              <button className="btn">Watches</button>
            </Link>
            <div className="submenu shadow">
              <Link to="#">
                <button className="btn">clothing</button>
              </Link>
              <Link to="#">
                <button className="btn">footwear</button>
              </Link>
              <Link to="#">
                <button className="btn">watches</button>
              </Link>
              <Link to="#">
                <button className="btn">clothing</button>
              </Link>
              <Link to="#">
                <button className="btn">footwear</button>
              </Link>
            </div>
          </li>
          <li className="list-inline-item">
            <Link to="/cat/kids">
              <button className="btn">Kids</button>
            </Link>
            <div className="submenu shadow">
              <Link to="#">
                <button className="btn">clothing</button>
              </Link>
              <Link to="#">
                <button className="btn">footwear</button>
              </Link>
              <Link to="#">
                <button className="btn">watches</button>
              </Link>
              <Link to="#">
                <button className="btn">clothing</button>
              </Link>
              <Link to="#">
                <button className="btn">footwear</button>
              </Link>
            </div>
          </li>
          <li className="list-inline-item">
            <Link to="/cat/gift">
              <button className="btn">Gift</button>
            </Link>
            <div className="submenu shadow">
              <Link to="#">
                <button className="btn">clothing</button>
              </Link>
              <Link to="#">
                <button className="btn">footwear</button>
              </Link>
              <Link to="#">
                <button className="btn">watches</button>
              </Link>
              <Link to="#">
                <button className="btn">clothing</button>
              </Link>
              <Link to="#">
                <button className="btn">footwear</button>
              </Link>
            </div>
          </li>
          <li className="list-inline-item">
            <Link to="#">
              <button className="btn">Blog</button>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#">
              <button className="btn">Contact</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
