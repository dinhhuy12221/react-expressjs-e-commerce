import React from "react";
import { IoCartOutline } from "react-icons/io5";

const CartTotal = () => {
  return (
    <div>
      <h4>CART TOTALS</h4>
      <div className="profile-page-cart-content-summary-subtotal">
        <span>Subtotal</span>
        <span>$3.29</span>
      </div>
      <div className="profile-page-cart-content-summary-delivery">
        <span>Delivery</span>
        <span className="ms-auto">Free</span>
      </div>
      <div className="profile-page-cart-content-summary-location">
        <span>Estimated for</span>
        <span>United Kingdom</span>
      </div>
      <div className="profile-page-cart-content-summary-total">
        <span>Total</span>
        <span>$3.29</span>
      </div>
      <button className="profile-page-cart-content-summary-checkout btn btn--primary">
        <IoCartOutline className="me-2" />
        <span>Checkout</span>
      </button>
    </div>
  );
};

export default CartTotal;
