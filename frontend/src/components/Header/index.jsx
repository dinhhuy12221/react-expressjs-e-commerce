import { useContext, useState } from "react";
import Logo from "~/assets/images/logo.png";
import CountrySelector from "../CountrySelector/index";
import SearchBox from "./SearchBox/index";
import SiteCanvas from "../SiteCanvas";
import Navigation from "./Navigation/index";
import { MyContext } from "~/App";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosMenu } from "react-icons/io";
// import { useSelector } from "react-redux";
// import { selectCurrentCustomer } from "~/features/auth/authSlice";
// import Profile from "./Profile";
import "./index.css";

function Header() {
  const context = useContext(MyContext);
  const [open, setOpen] = useState(false);
  // const customer = useSelector(selectCurrentCustomer);

  return (
    <div className="header-wrapper">
      <SiteCanvas open={open} onClose={() => setOpen(false)}/>
      <header className="header">
        <p className="banner-strip">
          Due to the COVID 19 epidemic, orders may be processed with a slight
          delay
        </p>
        <div className="header-content">
          <button className="btn menu-button" onClick={() => setOpen(true)}>
            <IoIosMenu />
          </button>
          <a href="/" className="logo">
            <img src={Logo} alt="Logo"></img>
          </a>
          {context.countryList.length !== 0 && (
            <CountrySelector className="country-selector" />
          )}
          <SearchBox className="search-box" />
          <a href="/login" className="btn btn--primary signin-button">
            Signin
          </a>
          {/* {!customer ? (
            <a href="/login" className="btn btn--primary signin-button">
              Signin
            </a>
          ) : (
            <Profile customer={customer} />
          )} */}
          <span className="cart-price">$0.00</span>
          <div className="cart">
            <span className="cart-count btn--rounded">1</span>
            <a
              href="/cart"
              className="btn btn--rounded btn--outlined cart-button"
            >
              <TiShoppingCart />
            </a>
          </div>
        </div>
      </header>
      <Navigation />
    </div>
  );
}

export default Header;
