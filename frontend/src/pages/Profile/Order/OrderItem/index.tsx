import React from "react";

import "./index.css";
import { getDiscountPrice } from "~/utils/getDiscountPrice";

const OrderItem = ({ order }) => {
  return (
    <div className="order-item">
      <h3 className="order-item-id">#{order._id}</h3>
      <div className="order-item-content">
        {order.products.map((i) => (
          <div className="order-item-product">
            <img className="order-item-product-thumbnail" src={i.id.image} />
            <div className="order-item-product-content">
              <h2>{i.id.name}</h2>
              <div className="order-item-product-content-prices">
                <span className="order-item-product-content-prices-old-price">
                  ${i.price}
                </span>
                <span className="order-item-product-content-prices-net-price">
                  ${getDiscountPrice(i.price, i.discount).toFixed(2)}
                </span>
              </div>
              <div className="order-item-product-content-total">
                <div>Total: {i.count}</div>
                <div>Price: {(i.count * getDiscountPrice(i.price, i.discount)).toFixed(2)}</div>
              </div>
            </div>
          </div>
        ))}
        <div className="order-item-content-summary">
          <div>Delivery: ${order.delivery}</div>
          <div>Location: {order.location}</div>
          <div>Total price: ${order.totalPrice.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
