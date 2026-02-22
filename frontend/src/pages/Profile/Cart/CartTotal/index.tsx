import React from "react";
import { IoCartOutline } from "react-icons/io5";

const CartTotal = () => {
  return (
    <div className="cart-total">
      <h4>CART TOTALS</h4>
      <div className="cart-total-subprice">
        <span>Subtotal</span>
        <span>$3.29</span>
      </div>
      <div className="cart-total-delivery">
        <span>Delivery</span>
        <span className="ms-auto">Free</span>
      </div>
      <div className="cart-total-location">
        <span>Estimated for</span>
        <span>United Kingdom</span>
      </div>
      <div className="cart-total-price">
        <span>Total</span>
        <span>$3.29</span>
      </div>
      <button className="cart-total-checkout-button btn btn--primary">
        <IoCartOutline className="me-2" />
        <span>Checkout</span>
      </button>
    </div>
  );
};

export default CartTotal;
