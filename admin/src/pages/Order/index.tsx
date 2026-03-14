import { useEffect, useState } from "react";
import { getOrders } from "../../api/order";

import "./index.css";
import Breadcrumb from "../../components/Breadcrumb";

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
    </div>
  );
};

export default Order;
