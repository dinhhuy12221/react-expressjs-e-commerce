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
          <p className="text">
            Join our email subscription now
            <br />
            to get updates on promotions and coupons.
          </p>

          <form className="footer-newsletter-email-form">
            <CiMail className="icon" />
            <input type="email" placeholder="Your email address"></input>
            <button className="btn btn--primary">Subscribe</button>
          </form>
        </div>

        <div className="footer-newsletter-img">
          <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/coupon.png" />
        </div>
      </section>
      <section className="footer-content">
        <div className="footer-label">
          <div>
            <span>
              <RiShirtLine />
              Everyday fresh products
            </span>
          </div>
          <div>
            <span>
              <CiDeliveryTruck />
              Free delivery for order over $70
            </span>
          </div>
          <div>
            <span>
              <RiDiscountPercentLine />
              Daily Mega Discounts
            </span>
          </div>
          <div>
            <span>
              <CiDollar />
              Best price on the market
            </span>
          </div>
        </div>
        <div className="linksWrap">
          <div className="col">
            <h5>FRUIT & VEGETABLES</h5>
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
          <div className="col">
            <h5>Breakfast & Dairy</h5>
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
          <div className="col">
            <h5>Meat & Seafood</h5>
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
          <div className="col">
            <h5>Beverages</h5>
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
          <div className="col">
            <h5>Breads & Bakery</h5>
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
            <Link to={"#"} className="footer-bottom-contracts-item btn btn--outlined btn--circle">
              <FaTwitter />
            </Link>
            <Link to={"#"} className="footer-bottom-contracts-item btn btn--outlined btn--circle">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
