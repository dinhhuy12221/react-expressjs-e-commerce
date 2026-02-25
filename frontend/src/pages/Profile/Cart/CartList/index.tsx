import React, { useState } from "react";
import CartItem from "../CartItem";

const CartList = ({ products, customerId, selectedIds, setSelectedIds }) => {

  if (products.length !== 0) {
    return products.map((product) => (
      <CartItem
        product={product.productId}
        cartId={product._id}
        productCount={product.productCount}
        customerId={customerId}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />
    ));
  }
};

export default CartList;
