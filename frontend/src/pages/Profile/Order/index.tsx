import React from "react";

import { useGetOrdersByCustomerQuery } from "~/features/orders/ordersApi";
import { useEffect } from "react";
import "./index.css";
import { useSelector } from "react-redux";
import { selectCurrentCustomerId } from "~/features/auth/authSlice";

function Order() {
  const customerId = useSelector(selectCurrentCustomerId);
  const getOrdersByCustomer = useGetOrdersByCustomerQuery(customerId);

  // const tagLiOfOrders = () => {
  //     return ordersByCustomer.map((order, index) => {
  //         <li key={index}>{order.productId}</li>
  //     })
  // }


  useEffect(() => {
    
    const orderList = async () => {
      try {
        // const list = await getOrdersByCustomer({ id: 1 });
        // console.log(list);
      } catch (error) {
        console.error(error);
      }
    };
    orderList()
}, []);
  return (
    <div className="orders-section">
      <ul>
        <li></li>
      </ul>
    </div>
  );
}

export default Order;
