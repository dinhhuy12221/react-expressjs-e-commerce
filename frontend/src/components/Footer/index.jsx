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
    <footer>
      <section className="news-letter">
        <div className="email-label">
          <p className="text">$20 discount for your first order</p>
          <h1>Join our newsletter and get...</h1>
          <p className="text">
            Join our email subscription now
            <br />
            to get updates on promotions and coupons.
          </p>

          <form className="email-form">
            <CiMail className="icon" />
            <input type="email" placeholder="Your email address"></input>
            <button className="btn btn--primary">Subscribe</button>
          </form>
        </div>

        <div>
          <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/coupon.png" />
        </div>
      </section>
      <section className="footer-content">
        <div className="footer-label">
          <div>
            <RiShirtLine />
            <span>Everyday fresh products</span>
          </div>
          <div>
            <CiDeliveryTruck />
            <span>Free delivery for order over $70</span>
          </div>
          <div>
            <RiDiscountPercentLine />
            <span>Daily Mega Discounts</span>
          </div>
          <div>
            <CiDollar />
            <span>Best price on the market</span>
          </div>
        </div>
        <div className="row mt-5 linksWrap">
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

        <div className="socials copyright mt-3 pt-3 pb-3 d-flex">
          <p className="mb-0">© 2024 dinhhuy12221. All rights reserved. Design inspired by Bacola UI.</p>
          <ul className="list list-inline ms-auto mb-0 socials">
            <li className="list-inline-item">
              <Link to="#">
                <FaFacebookF />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#">
                <FaTwitter />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#">
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
