import React, { useEffect, useState } from "react";

import "./index.css";
import Breadcrumb from "../../../components/Breadcrumb";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../../api/order";
import getDiscountPrice from "../../../utils/getDiscountPrice";

const OrderDetail = () => {
  const [order, setOrder] = useState<any>(null);
  const [subtotal, setSubtotal] = useState<Number>(0);
  const { id } = useParams();

  useEffect(() => {
    const handleAsync = async () => {
      const result = await getOrderById(id);
      setOrder(result);

      console.log(result);
    };

    handleAsync();
  }, [id]);

  // useEffect(() => {
  //   if (order) {
  //     const result = order.reduce((acc, item) => acc + item.finalPrice, 0);
  //     setSubtotal(result);
  //   }
  // }, [order]);

  if (order === null) return;

  return (
    <div className="order-detail">
      <Breadcrumb
        path={[
          {
            name: "Orders",
            to: `/orders`,
          },
          {
            name: `${order._id}`,
            to: `/${order._id}`,
          },
        ]}
      />

      <div className="order-content">
        <div className="order-content-products">
          {order.products.map((i) => (
            <div className="order-content-products-item">
              <img src={i.id.images[0].url} />
              <h3 className="order-content-products-item-name">{i.id.name}</h3>
              <h3 className="order-content-products-item-count">x{i.count}</h3>
              <div className="order-content-products-item-price">
                <span className="order-content-products-item-price-old">
                  ${i.price}
                </span>
                <span className="order-content-products-item-price-net">
                  ${getDiscountPrice(i.price, i.discount).toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="order-summary">
          <div className="order-summary-row">
            <span>Subtotal</span>
            <span>${order.totalPrice.toFixed(2)}</span>
          </div>

          <div className="order-summary-row">
            <span>Shipping</span>
            <span>${order.delivery.toFixed(2)}</span>
          </div>

          <div className="order-summary-row">
            <span>Tax</span>
            <span>$0.50</span>
          </div>

          <div className="order-summary-divider"></div>

          <div className="order-summary-row total">
            <span>Total</span>
            <span>${(order.totalPrice + order.delivery + 0.5).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
