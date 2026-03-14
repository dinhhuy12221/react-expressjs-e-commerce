import { useEffect, useState } from "react";
import { getOrders } from "../../api/order";

import "./index.css";
import Breadcrumb from "../../components/Breadcrumb";

// Statistic (Date, Month, Year)
// Revenue
// Orders count
// 
const Order = () => {
  const [orders, setOrders] = useState<any>(null);

  useEffect(() => {
    const handleAsync = async () => {
      const result = await getOrders();
      setOrders(result);
    };

    handleAsync();
  }, []);
  return (
    <div className="order">
      <Breadcrumb
        path={[
          {
            name: "Orders",
            to: `/orders`,
          },
        ]}
      />
      <div className="order-stat">
        Stat
      </div>
      <div className="order-content">
        Content
      </div>
    </div>
  );
};

export default Order;
