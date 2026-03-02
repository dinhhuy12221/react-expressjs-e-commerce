import React from "react";

import "./index.css";

const OrderItem = ({ order }) => {
  return (
    <div className="order-item">
      <h3 className="order-item-id">#{order._id}</h3>
      <div className="order-item-content">
          <div>
            Products:{" "}
            {order.products.map((i) => (
              <span>
                {i.count}, {i.price}, {i.discount}, {i.id.name}
              </span>
            ))}
          </div>
          <div>Delivery: {order.delivery}</div>
          <div>Location: {order.location}</div>
      </div>
    </div>
  );
};

export default OrderItem;
