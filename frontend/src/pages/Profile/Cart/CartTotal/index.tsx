import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { getDiscountPrice } from "~/utils/getDiscountPrice";

import "./index.css";

const CartTotal = ({ products, selectedIds }) => {
  const total = products
    .filter((item) => selectedIds.includes(item.productId._id))
    .reduce((acc, item) => {
      const price =
        getDiscountPrice(item.productId.price, item.productId.discount) *
        item.product_count;
      return acc + price;
    });
  return (
    <div className="cart-total">
      <h4>Cart Totals</h4>
      {/* <div className="cart-total-subprice">
        <span>Subtotal: </span>
        <span>${subtotal}</span>
      </div> */}
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
        <span>${total}</span>
      </div>
      <button className="cart-total-checkout-button btn btn--primary">
        <IoCartOutline className="me-2" />
        <span>Checkout</span>
      </button>
    </div>
  );
};

export default CartTotal;
