import React from "react";

import { useGetOrdersByCustomerQuery } from "~/features/orders/ordersApi";
import { useEffect } from "react";
import "./index.css";

function Orders() {
  const getOrdersByCustomer = useGetOrdersByCustomerQuery(null);

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

export default Orders;
