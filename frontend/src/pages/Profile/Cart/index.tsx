import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { IoClose } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

import QuantityBox from "~/components/QuantityBox";
import { useGetCartByCustomerQuery } from "~/features/cart/cartApi";
import { useSelector } from "react-redux";
import { RootState } from "~/app/store";
import { CartInt } from "~/features/cart/cart.types";
import { getProductById } from "~/api/product";
import { getDiscountPrice } from "~/utils/getDiscountPrice";

import "./index.css";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const customerId = useSelector((state: RootState) => state.auth.customerId);
  const { data, isLoading } = useGetCartByCustomerQuery(customerId);
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

  useEffect(() => {
    getProductsFromCart();
  }, [cart]);

  if (products.length !== 0) {
    return (
      <section className="profile-page-cart">
        <div className="profile-page-cart-header">
          <h2 className="profile-page-cart-header-title">Your Cart</h2>
          <p>
            There are <b>{products.length}</b> products in your cart
          </p>
        </div>
        <div className="profile-page-cart-content">
          <table className="profile-page-cart-content-table">
            <thead className="profile-page-cart-content-table-head">
              <tr>
                <th></th>
                <th>Product</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="profile-page-cart-content-table-body">
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
                        $
                        {getDiscountPrice(
                          product.price,
                          product.discount
                        ).toFixed(2)}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="profile-page-cart-content-table-body-row-quantity">
                      <QuantityBox
                        count={product.countInCart}
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
            </tbody>
          </table>
          <div className="profile-page-cart-content-summary">
            <h4>CART TOTALS</h4>
            <div className="profile-page-cart-content-summary-subtotal">
              <span>Subtotal</span>
              <span>$3.29</span>
            </div>
            <div className="profile-page-cart-content-summary-delivery">
              <span>Delivery</span>
              <span className="ms-auto">Free</span>
            </div>
            <div className="profile-page-cart-content-summary-location">
              <span>Estimated for</span>
              <span>United Kingdom</span>
            </div>
            <div className="profile-page-cart-content-summary-total">
              <span>Total</span>
              <span>$3.29</span>
            </div>
            <button className="profile-page-cart-content-summary-checkout btn btn--primary">
              <IoCartOutline className="me-2" />
              <span>Checkout</span>
            </button>
          </div>
        </div>
      </section>
    );
  }
};

export default Cart;
