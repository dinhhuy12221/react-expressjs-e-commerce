import { Rating } from "@mui/material";
import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import QuantityCounter from "~/components/QuantityCounter";
import { getDiscountPrice } from "~/utils/getDiscountPrice";
import { useUpdateCartMutation } from "~/features/cart/cartApi";

import "./index.css";

const CartItem = ({ product, productCount, customerId, selectedIds, setSelectedIds }) => {
  const [updateCart, { isLoading }] = useUpdateCartMutation();
  const toggleProduct = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <tr className="cart-item">
      <td>
        <div className="cart-item-selector">
          <input
            type="checkbox"
            value={product.cartId}
            checked={selectedIds.includes(product.cartId)}
            onChange={() => toggleProduct(product.cartId)}
          />
        </div>
      </td>
      <td>
        <div className="cart-item-info">
          <Link to={`../../product/${product.slug}`}>
            <img className="cart-item-info-image" src={product.image} />
          </Link>
          <div className="cart-item-info-main">
            <h4>{product.name}</h4>
            <Rating
              className="rating"
              name="read-only"
              defaultValue={product.rating}
              precision={0.5}
              readOnly
            />
          </div>
        </div>
      </td>
      <td>
        <div className="cart-item-price">
          <span>
            ${getDiscountPrice(product.price, product.discount).toFixed(2)}
          </span>
        </div>
      </td>
      <td>
        <div className="cart-item-quantity">
          <QuantityCounter
            value={productCount}
            stock={product.countInStock}
            onChange={(newValue) => {
              updateCart({
                customerId,
                productId: product._id,
                productCount: newValue
              })
            }}
          />
        </div>
      </td>
      <td>
        <div className="cart-item-total-price">
          <span>
            $
            {(
              productCount *
              getDiscountPrice(product.price, product.discount)
            ).toFixed(2)}
          </span>
        </div>
      </td>
      <td>
        <div className="cart-item-remove">
          <IoClose className="btn btn--primary btn--rounded" />
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
