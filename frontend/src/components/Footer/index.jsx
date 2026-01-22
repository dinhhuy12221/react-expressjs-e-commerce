import { Link } from "react-router-dom";

import { RiShirtLine } from "react-icons/ri";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiDiscountPercentLine } from "react-icons/ri";
import { CiDollar } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

import "./index.css";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer-newsletter">
        <div className="footer-newsletter-email">
          <p className="text">$20 discount for your first order</p>
          <h1>Join our newsletter and get...</h1>
          <p className="text footer-newsletter-email-description">
            Join our email subscription now to get updates on promotions and
            coupons.
          </p>

          <form className="footer-newsletter-email-form">
            <CiMail className="icon" />
            <input type="email" placeholder="Your email address"></input>
            <button className="btn btn--primary">Subscribe</button>
          </form>
        </div>

        <div className="footer-newsletter-thumbnail">
          <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/coupon.png" />
        </div>
      </section>
      <section className="footer-content">
        <div className="footer-label">
          <div>
            <RiShirtLine />
            Everyday fresh products
          </div>
          <div>
            <CiDeliveryTruck />
            Free delivery for order over $70
          </div>
          <div>
            <RiDiscountPercentLine />
            Daily Mega Discounts
          </div>
          <div>
            <CiDollar />
            Best price on the market
          </div>
        </div>
        <div className="footer-widgets">
          <div className="footer-widget-menu">
            <h5 className="footer-widget-menu-header">FRUIT & VEGETABLES</h5>
            <ul>
              <li>
                <Link to="#">Fresh Vegetables</Link>
              </li>
              <li>
                <Link to="#">Herbs & Seasonings</Link>
              </li>
              <li>
                <Link to="#">Fresh Fruits</Link>
              </li>
              <li>
                <Link to="#">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#">Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to="#">Packaged Produce</Link>
              </li>
              <li>
                <Link to="#">Party Trays</Link>
              </li>
            </ul>
          </div>
          <div className="footer-widget-menu">
            <h5 className="footer-widget-menu-header">Breakfast & Dairy</h5>
            <ul>
              <li>
                <Link to="#">Fresh Vegetables</Link>
              </li>
              <li>
                <Link to="#">Herbs & Seasonings</Link>
              </li>
              <li>
                <Link to="#">Fresh Fruits</Link>
              </li>
              <li>
                <Link to="#">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#">Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to="#">Packaged Produce</Link>
              </li>
              <li>
                <Link to="#">Party Trays</Link>
              </li>
            </ul>
          </div>
          <div className="footer-widget-menu">
            <h5 className="footer-widget-menu-header">Meat & Seafood</h5>
            <ul>
              <li>
                <Link to="#">Fresh Vegetables</Link>
              </li>
              <li>
                <Link to="#">Herbs & Seasonings</Link>
              </li>
              <li>
                <Link to="#">Fresh Fruits</Link>
              </li>
              <li>
                <Link to="#">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#">Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to="#">Packaged Produce</Link>
              </li>
              <li>
                <Link to="#">Party Trays</Link>
              </li>
            </ul>
          </div>
          <div className="footer-widget-menu">
            <h5 className="footer-widget-menu-header">Beverages</h5>
            <ul>
              <li>
                <Link to="#">Fresh Vegetables</Link>
              </li>
              <li>
                <Link to="#">Herbs & Seasonings</Link>
              </li>
              <li>
                <Link to="#">Fresh Fruits</Link>
              </li>
              <li>
                <Link to="#">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#">Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to="#">Packaged Produce</Link>
              </li>
              <li>
                <Link to="#">Party Trays</Link>
              </li>
            </ul>
          </div>
          <div className="footer-widget-menu">
            <h5 className="footer-widget-menu-header">Breads & Bakery</h5>
            <ul>
              <li>
                <Link to="#">Fresh Vegetables</Link>
              </li>
              <li>
                <Link to="#">Herbs & Seasonings</Link>
              </li>
              <li>
                <Link to="#">Fresh Fruits</Link>
              </li>
              <li>
                <Link to="#">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#">Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to="#">Packaged Produce</Link>
              </li>
              <li>
                <Link to="#">Party Trays</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-copyright">
            © 2026 dinhhuy12221. All rights reserved. Design inspired by{" "}
            <a
              href="https://klbtheme.com/bacola/"
              target="_blank"
              rel="noopener"
            >
              Bacola
            </a>
            .
          </p>
          <div className="footer-bottom-contracts">
            <Link
              to={"#"}
              className="footer-bottom-contracts-item btn btn--outlined btn--circle"
            >
              <FaFacebookF />
            </Link>
            <Link
              to={"#"}
              className="footer-bottom-contracts-item btn btn--outlined btn--circle"
            >
              <FaTwitter />
            </Link>
            <Link
              to={"#"}
              className="footer-bottom-contracts-item btn btn--outlined btn--circle"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
