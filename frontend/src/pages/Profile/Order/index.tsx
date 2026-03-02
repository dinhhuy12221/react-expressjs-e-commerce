import React from "react";

import { useGetOrdersByCustomerQuery } from "~/features/orders/ordersApi";
import { useSelector } from "react-redux";
import { selectCurrentCustomerId } from "~/features/auth/authSlice";
import OrderItem from "./OrderItem";

import "./index.css";

function Order() {
  const customerId = useSelector(selectCurrentCustomerId);
  const { data, isLoading } = useGetOrdersByCustomerQuery(customerId);
  const orders = data?.data;

  return (
    <div className="order-page">
      <div className="order-page-content">
        {orders && orders.map(item => <OrderItem order={item} />)}
      </div>
    </div>
  );
}

export default Order;
