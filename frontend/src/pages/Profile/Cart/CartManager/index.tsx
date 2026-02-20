import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { IoClose } from "react-icons/io5";

import QuantityCounter from "~/components/QuantityCounter";
import {
  useGetCartByCustomerQuery,
  useUpdateCartMutation,
} from "~/features/cart/cartApi";
import { useSelector } from "react-redux";
import { RootState } from "~/app/store";
import { CartInt } from "~/features/cart/cart.types";
import { getProductById } from "~/api/product";
import { getDiscountPrice } from "~/utils/getDiscountPrice";

const CartManager = () => {
  const [products, setProducts] = useState([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const customerId = useSelector((state: RootState) => state.auth.customerId);
  const { data } = useGetCartByCustomerQuery(customerId);
  const [updateCart, { isLoading }] = useUpdateCartMutation();
  const cart: CartInt[] = data ?? [];

  const getProductsFromCart = async () => {
    const result = await Promise.all(
      cart.map(async (item) => {
        const tempProduct = await getProductById(item.product_id).then(
          (res) => res[0]
        );
        return {
          ...tempProduct,
          cartId: item._id,
          countInCart: item.product_count,
        };
      })
    );

    setProducts(result);
  };

  const toggleProduct = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleUpdateCart = async (
    customer_id: number,
    product_id: number,
    product_count: number
  ) => {
    setProducts((prev) =>
      prev.map((p) =>
        p._id === product_id ? { ...p, countInCart: product_count } : p
      )
    );

    const payload = {
      customer_id,
      product_id,
      product_count,
    };
    await updateCart(payload).unwrap();
  };

  useEffect(() => {
    getProductsFromCart();
  }, [cart]);

  if (products.length !== 0) {
  return (
    <div>
      {products.map((product) => (
        <tr className="profile-page-cart-content-table-body-row">
          <td>
            <div className="profile-page-cart-content-table-body-row-selector">
              <input
                type="checkbox"
                value={product.cartId}
                checked={selectedIds.includes(product.cartId)}
                onChange={() => toggleProduct(product.cartId)}
              />
            </div>
          </td>
          <td>
            <div className="profile-page-cart-content-table-body-row-info">
              <Link to={`../../product/${product.slug}`}>
                <img
                  className="profile-page-cart-content-table-body-row-info-image"
                  src={product.image}
                />
              </Link>
              <div className="profile-page-cart-content-table-body-row-info-main">
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
            <div className="profile-page-cart-content-table-body-row-price">
              <span>
                ${getDiscountPrice(product.price, product.discount).toFixed(2)}
              </span>
            </div>
          </td>
          <td>
            <div className="profile-page-cart-content-table-body-row-quantity">
              <QuantityCounter
                value={product.countInCart}
                onChange={() => setProducts}
                stock={product.countInStock}
              />
            </div>
          </td>
          <td>
            <div className="profile-page-cart-content-table-body-row-total-price">
              <span>
                $
                {(
                  product.countInCart *
                  getDiscountPrice(product.price, product.discount)
                ).toFixed(2)}
              </span>
            </div>
          </td>
          <td>
            <div className="profile-page-cart-content-table-body-row-remove">
              <IoClose className="btn btn--primary btn--rounded" />
            </div>
          </td>
        </tr>
      ))}
    </div>
  );
}
};

export default CartManager;
