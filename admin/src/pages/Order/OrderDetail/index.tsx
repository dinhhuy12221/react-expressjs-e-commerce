import React, { useEffect, useState } from "react";

import "./index.css";
import Breadcrumb from "../../../components/Breadcrumb";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../../api/order";
import getDiscountPrice from "../../../utils/getDiscountPrice";

const OrderDetail = () => {
  const [order, setOrder] = useState<any>(null);
  const { id } = useParams();

  useEffect(() => {
    const handleAsync = async () => {
      const result = await getOrderById(id);
      setOrder(result);

      console.log(result);
    };

    handleAsync();
  }, [id]);

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
                  ${i.price}aaaaaaaaaaaaaa
                </span>
                <span className="order-content-products-item-price-net">
                  ${getDiscountPrice(i.price, i.discount).toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="order-summary">
          <div className="row">
            <span>Subtotal</span>
            <span>${(1.1111).toFixed(2)}</span>
          </div>

          <div className="row">
            <span>Shipping</span>
            <span>$2.00</span>
          </div>

          <div className="row">
            <span>Tax</span>
            <span>$0.50</span>
          </div>

          <div className="divider"></div>

          <div className="row total">
            <span>Total</span>
            <span>${(1.1111).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
