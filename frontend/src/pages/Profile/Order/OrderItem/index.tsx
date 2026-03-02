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
                <span className="order-item-product-content-total-quantity">Quantity: <b>{i.count}</b></span>
                <span className="order-item-product-content-total-price">Total: <b>${(i.count * getDiscountPrice(i.price, i.discount)).toFixed(2)}</b></span>
              </div>
            </div>
          </div>
        ))}
      </div>
        <div className="order-item-content-summary">
          <div>Delivery: <b>${order.delivery}</b></div>
          <div>Location: <b>{order.location}</b></div>
          <div>Final price: <b>${order.totalPrice.toFixed(2)}</b></div>
        </div>
    </div>
  );
};

export default OrderItem;
