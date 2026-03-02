import React from "react";

import "index.css";

const OrderItem = ({ order }) => {
  return (
    <div>
      <span>Delivery: {order.delivery}</span>
      <span>Location: {order.location}</span>
      <span>
        Products:{" "}
        {order.products.map((i) => (
          <span>
            {i.count}, {i.price}, {i.discount}, {i.id.name}
          </span>
        ))}
      </span>
    </div>
  );
};

export default OrderItem;
