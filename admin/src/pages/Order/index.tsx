import { useEffect, useState } from "react";
import { getOrders } from "../../api/order";

import Breadcrumb from "../../components/Breadcrumb";
import "./index.css";
import BasicArea from "../../components/LineChart";
import dateFormatter from "../../utils/dateFormatter";
import { RiBox2Fill } from "react-icons/ri";
import { SiTicktick } from "react-icons/si";
import { BiDollarCircle } from "react-icons/bi";
import dateTimeFormatter from "../../utils/dateTImeFormatter";
import { useNavigate } from "react-router-dom";

// Statistic (Date, Month, Year)
// - Revenue
// - Orders count
// -
const Order = () => {
  const [orders, setOrders] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleAsync = async () => {
      const result = await getOrders();
      setOrders(result);
    };

    handleAsync();
  }, []);

  useEffect(() => {
    const grouped = orders?.reduce((acc, item) => {
      const date = dateFormatter(new Date(item.deliveredAt));

      if (!acc[date]) {
        acc[date] = 0;
      }

      acc[date] += item.totalPrice;

      return acc;
    }, {});

    const result = Object.entries(grouped).map(([date, price]) => ({
      date,
      price,
    }));

    setData(result);
  }, [orders]);

  if (orders === null) return;

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
          <div className="order-stat-content-box">
            <div className="order-stat-content-box-item in-progress">
              <h3 className="order-stat-content-box-item-title">
                <RiBox2Fill /> In Progress
              </h3>
              <span className="order-stat-content-box-item-content">
                {orders.reduce((acc, item) => acc + (new Date(item.deliveredAt).getDate() > Date.now() ? 1 : 0), 0)} Orders
              </span>
            </div>
            <div className="order-stat-content-box-item completed">
              <h3 className="order-stat-content-box-item-title">
                <SiTicktick /> Completed
              </h3>
              <span className="order-stat-content-box-item-content">
                {orders.reduce((acc, item) => acc + (new Date(item.deliveredAt).getDate() <= Date.now() ? 1 : 0), 0)} Orders
              </span>
            </div>
            <div className="order-stat-content-box-item revenue">
              <h3 className="order-stat-content-box-item-title">
                <BiDollarCircle /> Revenue</h3>
              <span className="order-stat-content-box-item-content">
                ${orders
                  .reduce((acc, item) => acc + item.totalPrice, 0)
                  .toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <BasicArea data={data} />
      </div>
      <h3>List of orders</h3>
      <table className="table table-bordered table-hover v-align order-table">
        {/* <div className="order-content-item-products">
              {item.products.map((i) => (
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
            </div> */}
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Ordered Date</th>
            <th>Delivered Date</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(
            (item) =>
              (
                <tr onClick={() => navigate(`${item._id}`)}>
                  <td>#{item._id}</td>
                  <td>{dateTimeFormatter(new Date(item.orderedAt))}</td>
                  <td>{dateTimeFormatter(new Date(item.deliveredAt))}</td>
                  <td>${item.totalPrice.toFixed(2)}</td>
                  <td>{new Date(item.deliveredAt).getDate() > Date.now() ? "In Progress" : "Completed"}</td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
