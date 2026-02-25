import React, { useState } from "react";
import {
  useGetCartByCustomerQuery,
} from "~/features/cart/cartApi";
import { useSelector } from "react-redux";
import { RootState } from "~/app/store";
import CartItem from "../CartItem";

const CartManager = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const customerId = useSelector((state: RootState) => state.auth.customerId);
  const { data } = useGetCartByCustomerQuery(customerId);
  const products = data ?? [];

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

export default CartManager;
