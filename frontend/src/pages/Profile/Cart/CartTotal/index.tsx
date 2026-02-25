import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { getDiscountPrice } from "~/utils/getDiscountPrice";

import "./index.css";

const CartTotal = ({ carts, selectedIds }) => {
  const products = carts
    .filter((item) => selectedIds.includes(item.productId._id))
  
  const total = products.reduce((acc, item) => {
      const price =
        getDiscountPrice(item.productId.price, item.productId.discount) *
        item.productCount;
      return acc + price;
    }, 0);

    // products : id, count
    // total, fee, location
    const handleCheckout = () => {

    }

  return (
    <div className="cart-total">
      <h4>Cart Totals</h4>
      <div className="cart-total-delivery">
        <span>Delivery Fee: </span>
        <span className="ms-auto">Free</span>
      </div>
      <div className="cart-total-location">
        <span>Location: </span>
        <span>United Kingdom</span>
      </div>
      <div className="cart-total-price">
        <span>Total: </span>
        <span>${total.toFixed(2)}</span>
      </div>
      <button className="cart-total-checkout-button btn btn--primary">
        <IoCartOutline />
        <span>&nbsp;Checkout</span>
      </button>
    </div>
  );
};

export default CartTotal;
