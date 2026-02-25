import React, { useState } from "react";
import CartItem from "../CartItem";

const CartList = ({ carts, customerId, selectedIds, setSelectedIds }) => {

  if (carts.length !== 0) {
    return carts.map((cart) => (
      <CartItem
        product={cart.productId}
        cartId={cart._id}
        productCount={cart.productCount}
        customerId={customerId}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />
    ));
  }
};

export default CartList;
