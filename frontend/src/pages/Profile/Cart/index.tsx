import React from "react";
import CartManager from "./CartManager";
import CartTotal from "./CartTotal";
import "./index.css";

const Cart = () => {
  return (
    <section className="profile-cart">
      <div className="profile-cart-header">
        <h2 className="profile-cart-header-title">Your Cart</h2>
        {/* <p>There are <b>{products.length}</b> products in your cart</p> */}
        <hr />
      </div>
      <div className="profile-cart-content">
        <table className="profile-cart-content-table">
          <thead className="profile-cart-content-table-head">
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody className="profile-cart-content-table-body">
            <CartManager />
          </tbody>
        </table>
          <CartTotal />
      </div>
    </section>
  );
};

export default Cart;
