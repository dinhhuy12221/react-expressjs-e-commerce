import React, { useContext, useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { getDiscountPrice } from "~/utils/getDiscountPrice";
import useCreateOrderHandler from "~/hooks/create/useCreateOrderHandler";
import { MyContext } from "~/App";
import { useGetCustomerQuery } from "~/features/customer/customerApi";
import "./index.css";

const CartTotal = ({ customerId, carts, selectedIds }) => {
  const { data: customer } = useGetCustomerQuery(customerId)
  const { handleCreateOrder, ...mutationState } = useCreateOrderHandler();
  const [address, setAddress] = useState("");
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
      handleCreateOrder(customerId, newProducts, address, 0);
    }
  };

  useEffect(() => {
    if (customer) setAddress(customer.address)
  }, [customer])

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
      <div className="cart-total-address">
        <span>Address: </span>
        <input value={address} onChange={e => setAddress(e.target.value)} type={"text"}placeholder="Enter address" />
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
