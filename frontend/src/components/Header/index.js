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
import { useSelector } from "react-redux";
import { selectCurrentCustomer } from "../../features/auth/authSlice";
import Profile from "./Profile";

function Header() {
  const context = useContext(MyContext);
  const customer = useSelector(selectCurrentCustomer);

  console.log(customer);

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
          <div className="middle_header">
            <div className="logoWrapper">
              <Link to={"/"}>
                <img src={Logo} alt="Logo"></img>
              </Link>
            </div>
              {context.countryList.length !== 0 && <CountryDropDown />}
              {/* Header Search start here  */}
              <SearchBox />
              {/* Header Search ends here  */}
                {!customer ? (
                  <Link to="/login">
                    <button className="btn btn-red btn-round signin">Sign In</button>
                  </Link>
                ) : (
                  <Profile customer={customer} />
                )}
  
                <div className="ms-auto cartTab d-flex align-items-center">
                  <span className="price">$55.5</span>
                  <div className="position-relative me-2">
                    <Link to={"/cart"}>
                      <Button className="btn circle ms-3">
                        <TiShoppingCart />
                      </Button>
                    </Link>
                    <span className="count d-flex align-items-center justify-content-center">
                      1
                    </span>
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
