import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import CountryDropDown from "../CountryDropdown/index";
import SearchBox from "./SearchBox/index";
import Navigation from "./Navigation/index";
import { MyContext } from "../../App";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { selectCurrentCustomer } from "../../features/auth/authSlice";
import Profile from "./Profile";
import "./index.css";

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
              <Link to="/login" className="btn btn--primary btn--signin">
                Sign In
              </Link>
            ) : (
              <Profile customer={customer} />
            )}
            <span className="cart-price">$55.5</span>
            <div className="cart">
              
              <span className="cart-count btn--circle">
                1
              </span>
              <a
                href="/cart"
                className="cart-button btn btn--circle btn--outlined"
              >
                <TiShoppingCart />
              </a>
            </div>
          </div>
        </header>

        <Navigation />
      </div>
    </>
  );
}

export default Header;
