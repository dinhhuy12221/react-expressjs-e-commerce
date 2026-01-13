import { MdMenu } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { CiApple } from "react-icons/ci";
import { TbMeat } from "react-icons/tb";
import { GiRawEgg } from "react-icons/gi";
import { MdOutlineLocalCafe } from "react-icons/md";
import { BsCookie } from "react-icons/bs";
import { IoSnowSharp } from "react-icons/io5";
import { TbCandy } from "react-icons/tb";
import { PiPlant } from "react-icons/pi";
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
              <CiApple />
                <span>Fruits & Vegetables</span>
                <FaAngleRight />
              </Link>
              <ul className="sub-categories">
                <li>
                  <Link to="#" className="btn">
                    <span>Cuts & Sprouts</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="btn">
                    <span>Exotic Fruits & Veggies</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="btn">
                    <span>Fresh Fruits</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="btn">
                    <span>Fresh Vegetables</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="btn">
                    <span>Herbs & Seasonings</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="btn">
                    <span>Packaged Produce</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="btn">
                    <span>Party Trays</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#" className="btn">
              <TbMeat />
                <span>Meats & Seafood</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="btn">
              <GiRawEgg />
                <span>Breakfast & Dairy</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="btn">
              <MdOutlineLocalCafe />
                <span>Beverages</span>
                <FaAngleRight />
              </Link>
              <ul className="sub-categories">
                <li><Link to="#" className="btn"><span>Coffee</span></Link></li>
                <li><Link to="#" className="btn"><span>Craft Beer</span></Link></li>
                <li><Link to="#" className="btn"><span>Drink Boxes &amp; Pouches</span></Link></li>
                <li><Link to="#" className="btn"><span>Milk &amp; Plant-Based Milk</span></Link></li>
                <li><Link to="#" className="btn"><span>Soda &amp; Pop</span></Link></li>
                <li><Link to="#" className="btn"><span>Sparkling Water</span></Link></li>
                <li><Link to="#" className="btn"><span>Tea &amp; Kombucha</span></Link></li>
                <li><Link to="#" className="btn"><span>Water</span></Link></li>
                <li><Link to="#" className="btn"><span>Wine</span></Link></li>
              </ul>
            </li>
            <li>
              <Link to="#" className="btn">
              <BsCookie />
                <span>Breads & Bakery</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="btn">
              <IoSnowSharp />
                <span>Frozen Foods</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="btn">
              <TbCandy />
                <span>Biscuits & Snacks</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="btn">
              <PiPlant />
                <span>Grocery & Staples</span>
              </Link>
            </li>
            <hr />
            <li>
              <Link to="#" className="btn">
                <span>Value of the Day</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="btn">
                <span>Top 100 Offers</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="btn">
                <span>New Arrivals</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="categories-section"> */}
      <ul className="categories-navigation">
        <li>
          <Link to="/" className="btn">
            Home
          </Link>
        </li>
        <li>
          <Link to="/cat/men" className="btn">
          <TbMeat />
            <span>Meats & Seafood</span>
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
          <Link to="/cat/women" className="btn">
          <GiRawEgg />
            <span>Bakery</span>
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
          <Link to="/cat/beauty" className="btn">
          <MdOutlineLocalCafe />
            <span>Beverages</span>
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
          <Link to="/cat/watches" className="btn">
            <span>Blog</span>
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
          <Link to="/cat/kids" className="btn">
            <span>Contact</span>
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
          <Link to="/cat/gift" className="btn">
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
