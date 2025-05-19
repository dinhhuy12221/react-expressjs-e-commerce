import "./index.css";
import { useGetOrdersByCustomerQuery } from "../../../../features/orders/ordersApi";
import { useEffect } from "react";

function Orders() {
  const getOrdersByCustomer = useGetOrdersByCustomerQuery();

  // const tagLiOfOrders = () => {
  //     return ordersByCustomer.map((order, index) => {
  //         <li key={index}>{order.product_id}</li>
  //     })
  // }

  const orderList = async () => {
    try {
      const list = await getOrdersByCustomer({ id: 1 });
    //   console.log(list);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
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
