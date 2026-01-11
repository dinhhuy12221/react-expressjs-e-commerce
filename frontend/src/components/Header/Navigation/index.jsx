import { MdMenu } from "react-icons/md";
// import { FaAngleDown } from "react-icons/fa";
// import { HiOutlineHome } from "react-icons/hi2";
import { FaAngleRight } from "react-icons/fa6";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

import "./index.css";
import { ArrowDownwardRounded } from "@mui/icons-material";

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
            <span className="text">CATEGORIES</span>
            <ArrowDownwardRounded />
          </button>
          <div
            className={`sub-categories-section ${isOpenSidebarVal === true ? "open" : ""}`}
            onAbort={() => setIsOpenSidebarVal(false)}
          >
            <ul>
              <li>
                <Link to="#">
                  <button className="btn">
                    Men
                    <FaAngleRight/>
                  </button>
                </Link>
                <div className="sub-categories">
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
                    <FaAngleRight/>
                  </button>
                </Link>
                <div className="sub-categories">
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
      {/* <div className="categories-section"> */}
        <ul className="categories-section">
          <li>
            <Link to="/">
              <button className="btn">Home</button>
            </Link>
          </li>
          <li>
            <Link to="/cat/men">
              <button className="btn">Men</button>
            </Link>
            <div className="sub-categories shadow">
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
            <Link to="/cat/women">
              <button className="btn">Women</button>
            </Link>
            <div className="sub-categories shadow">
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
            <Link to="/cat/beauty">
              <button className="btn">Beauty</button>
            </Link>
            <div className="sub-categories shadow">
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
            <Link to="/cat/watches">
              <button className="btn">Watches</button>
            </Link>
            <div className="sub-categories shadow">
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
            <Link to="/cat/kids">
              <button className="btn">Kids</button>
            </Link>
            <div className="sub-categories shadow">
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
            <Link to="/cat/gift">
              <button className="btn">Gift</button>
            </Link>
            <div className="sub-categories shadow">
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
              <button className="btn">Blog</button>
            </Link>
          </li>
          <li>
            <Link to="#">
              <button className="btn">Contact</button>
            </Link>
          </li>
        </ul>
      {/* </div> */}
    </nav>
  );
}
