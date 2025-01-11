import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Logo from "../../assets/images/logo.png";
import CountryDropDown from "../CountryDropdown/index";
import SearchBox from "./SearchBox/index";
import Navigation from "./Navigation/index";
import { MyContext } from "../../App";
import { FaRegUserCircle } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

import './index.css'

function Header() {
  const context = useContext(MyContext);

  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-red">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Due to the COVID 19 epidemic, orders may be processed with a
              slight delay
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container-fluid">
            <div className="row">
              <div className="logoWrapper d-flex col-sm-2">
                <Link to={"/"}>
                  <img src={Logo} alt="Logo"></img>
                </Link>
              </div>

              <div className="col-sm-10 d-flex align-items-center part2">
                {context.countryList.length !== 0 && <CountryDropDown />}
                {/* Header Search start here  */}
                <SearchBox />
                {/* Header Search ends here  */}

                <div className="part3 d-flex align-items-center ml-auto">
                  {context.isLogin === false ? (
                    <Link to="/signin">
                      <Button className="btn-red btn-round signin">
                        Sign In
                      </Button>
                    </Link>
                  ) : (
                    <Link to="">
                      <Button className="circle me-3">
                        <FaRegUserCircle />
                      </Button>
                    </Link>
                  )}

                  <div className="ms-auto cartTab d-flex align-items-center">
                    <span className="price">$55.5</span>
                    <div className="position-relative me-2">
                      <Button href={'/cart'} className="circle ms-3">
                        <TiShoppingCart />
                      </Button>
                      <span className="count d-flex align-items-center justify-content-center">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Navigation />
      </div>
    </>
  );
}

export default Header;
