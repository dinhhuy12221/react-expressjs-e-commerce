import { useContext } from "react";
import Logo from "../../assets/images/logo.png";
import CountrySelector from "../CountrySelector/index";
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

  return (
    <>
      <header className="header">
        <p className="banner-strip">
            Due to the COVID 19 epidemic, orders may be processed with a slight
            delay
        </p>

        <div className="header-content">
          <a href="/" className="logo">
            <img src={Logo} alt="Logo"></img>
          </a>
          {context.countryList.length !== 0 && <CountrySelector className="country-selector"/>}
          <SearchBox className="search-box"/>
          {!customer ? (
            <a href="/login" className="btn btn--primary btn--lg signin-button">
              Signin
            </a>
          ) : (
            <Profile customer={customer} />
          )}
          <span className="cart-price">$55.5</span>
          <div className="cart">
            <span className="cart-count btn--circle">1</span>
            <a
              href="/cart"
              className="btn btn--circle btn--outlined cart-button"
            >
              <TiShoppingCart />
            </a>
          </div>
        </div>
      </header>
      <Navigation />
    </>
  );
}

export default Header;
