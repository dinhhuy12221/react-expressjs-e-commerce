import React, { useContext, useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";
import { getDiscountPrice } from "~/utils/getDiscountPrice";
import useCreateOrderHandler from "~/hooks/create/useCreateOrderHandler";

import "./index.css";
import { MyContext } from "~/App";

const CartTotal = ({ customerId, carts, selectedIds }) => {
  const { handleCreateOrder, ...mutationState } = useCreateOrderHandler();
  const { setIsLoading } = useContext(MyContext);

  let products = carts.filter((item: any) =>
    selectedIds.includes(item.productId._id)
  );

  const total = products.reduce((acc, item) => {
    const price =
      getDiscountPrice(item.productId.price, item.productId.discount) *
      item.productCount;
    return acc + price;
  }, 0);

  let newProducts = products.map((item: any) => {
    return {
      id: item.productId._id,
      count: item.productCount,
    };
  });

  const handleCheckout = () => {
    if (newProducts.length > 0) {
      handleCreateOrder(customerId, newProducts, "United Kingdom", 0);
    }
  };

  useEffect(() => {
    setIsLoading(mutationState.isLoading);
  }, [mutationState]);

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
      <button
        className="cart-total-checkout-button btn btn--primary"
        onClick={handleCheckout}
      >
        <IoCartOutline />
        <span>&nbsp;Checkout</span>
      </button>
    </div>
  );
};

export default CartTotal;
