import React from "react";
import CartManager from "./CartManager";
import CartTotal from "./CartTotal";
import "./index.css";

const Cart = () => {
  return (
    <section className="profile-page-cart">
      <div className="profile-page-cart-header">
        <h2 className="profile-page-cart-header-title">Your Cart</h2>
        <p>{/* There are <b>{products.length}</b> products in your cart */}</p>
      </div>
      <div className="profile-page-cart-content">
        <table className="profile-page-cart-content-table">
          <thead className="profile-page-cart-content-table-head">
            <tr>
              <th></th>
              <th>Product</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody className="profile-page-cart-content-table-body">
            <CartManager />
          </tbody>
        </table>
        <div className="profile-page-cart-content-total">
          <CartTotal />
        </div>
      </div>
    </section>
  );
};

export default Cart;
