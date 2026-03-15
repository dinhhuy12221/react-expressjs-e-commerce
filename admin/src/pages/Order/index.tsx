import { useEffect, useState } from "react";
import { getOrders } from "../../api/order";

import Breadcrumb from "../../components/Breadcrumb";
import "./index.css";
import BasicArea from "../../components/LineChart";

// Statistic (Date, Month, Year)
// - Revenue
// - Orders count
// -
const Order = () => {
  const [orders, setOrders] = useState<any>([]);
  const [prices, setPrices] = useState<any>([])
  const data = [
  { date: "2001-01-01", price: 10 },
  { date: "2001-01-02", price: 20 },
  { date: "2001-01-03", price: 15 },
];

  useEffect(() => {
    const handleAsync = async () => {
      const result = await getOrders();
      setOrders(result);
    };

    handleAsync();
  }, []);

  useEffect(() => {
    const result = orders?.map(item => item.totalPrice)
    setPrices(result)
  }, [orders]);

  if (orders === null) return
  
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
        <div className="order-stat-filter">
          <span>Filter</span>
          <select>
            <option value="day">Day</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
        </div>
        <div className="order-stat-content">
            <div className="order-stat-content-number">Number of orders: {orders.length}</div>
            <div className="order-stat-content-avenue">Avenue of orders: ${orders.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2)}</div>
            <BasicArea data={data}/>
        </div>
      </div>
      <div className="order-content">
        {orders.map(item => (
            <div className="order-content-item">
                <div className="order-content-item-products">
                    {item.products.map(i => (
                        <div className="order-content-item-products-item">
                            <img src={i.id.images[0].url} />
                            <h3 className="order-content-item-products-item-name">
                                Name: {i.id.name}
                            </h3>
                            <h3 className="order-content-item-products-item-count">
                                Numbers: {i.count}
                            </h3>
                            <h3 className="order-content-item-products-item-discount">
                                Discount: {i.discount}%
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
