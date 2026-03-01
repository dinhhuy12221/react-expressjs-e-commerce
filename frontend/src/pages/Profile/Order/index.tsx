import React from "react";

import { useGetOrdersByCustomerQuery } from "~/features/orders/ordersApi";
import { useEffect } from "react";
import "./index.css";
import { useSelector } from "react-redux";
import { selectCurrentCustomerId } from "~/features/auth/authSlice";

function Order() {
  const customerId = useSelector(selectCurrentCustomerId);
  const { data, isLoading } = useGetOrdersByCustomerQuery(customerId);
  const orders = data.data;
  
  console.log(orders);
  

  // const tagLiOfOrders = () => {
  //     return ordersByCustomer.map((order, index) => {
  //         <li key={index}>{order.productId}</li>
  //     })
  // }


//   useEffect(() => {
    
//     const orderList = async () => {
//       try {
//         // const list = await getOrdersByCustomer({ id: 1 });
//         // console.log(list);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     orderList()
// }, []);
  return (
    <div className="orders-section">
      <ul>
        {orders && orders.map(item => (<li>
          <span>Delivery: {item.delivery}</span>
          <span>Location: {item.location}</span>
          <span>Products: {item.products.map(i => (<span>{i.count}, {i.price}, {i.discount}, {i.id.name}</span>))}</span>
        </li>) )}
      </ul>
    </div>
  );
}

export default Order;
