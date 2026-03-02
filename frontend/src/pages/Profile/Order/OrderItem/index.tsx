import React, { useState } from "react";

import { getDiscountPrice } from "~/utils/getDiscountPrice";
import { formatCountdown } from "~/utils/formatCountdown";
import { Link } from "react-router-dom";
import "./index.css";

const OrderItem = ({ order }) => {
  const [remain, setRemain] = useState("")
  
  const orderedAt = new Date(order.orderedAt);
  const formatted = `${orderedAt.getDate()}-${orderedAt.getMonth()}-${orderedAt.getFullYear()} ${orderedAt.getHours()}:${orderedAt.getMinutes()}:${orderedAt.getSeconds()}`

  const intervalId = setInterval(() => {
    const remaining = new Date(order.deliveredAt).getTime() - Date.now();

    if (remaining <= 0) {
      setRemain("")
      clearInterval(intervalId)
    }

    setRemain(formatCountdown(remaining))
  }, 1000)
  return (
    <div className="order-item">
      <h3 className="order-item-id">Order ID: #{order._id}</h3>
      <div className="order-item-content">
        {order.products.map((i) => (
          <div className="order-item-product">
            <img className="order-item-product-thumbnail" src={i.id.image} />
            <div className="order-item-product-content">
              <Link className="order-item-product-content-name" to={`../../product/${i.id.slug}`}>{i.id.name}</Link>
              <div className="order-item-product-content-prices">
                <span className="order-item-product-content-prices-old-price">
                  ${i.price}
                </span>
                <span className="order-item-product-content-prices-net-price">
                  ${getDiscountPrice(i.price, i.discount).toFixed(2)}
                </span>
              </div>
              <div className="order-item-product-content-total">
                <span className="order-item-product-content-total-quantity">Quantity: <b>{i.count}</b></span>
                <span className="order-item-product-content-total-price">Total: <b>${(i.count * getDiscountPrice(i.price, i.discount)).toFixed(2)}</b></span>
              </div>
            </div>
          </div>
        ))}
      </div>
        <div className="order-item-content-summary">
          <span>Delivery Fee: <b>${order.delivery}</b></span>
          <span>Location: <b>{order.location}</b></span>
          <span>Ordered At: <b>{formatted}</b></span>
          <span>Remaining Time: <b>{remain === "0" ? "Finished" : remain}</b></span>
          <span>Final price: <b>${order.totalPrice.toFixed(2)}</b></span>
        </div>
    </div>
  );
};

export default OrderItem;
