import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import QuantityBox from "~/components/QuantityBox";
import { IoClose } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

import "./index.css";
import { useGetCartByCustomerQuery } from "~/features/cart/cartApi";
import { useSelector } from "react-redux";
import { RootState } from "~/app/store";
import { useGetProductByIdQuery } from "~/features/product/productApi";
import { CartInt } from "~/features/cart/cart.types";
import { getProductById } from "~/api/product";
import { ProductInt } from "~/features/product/product.types";
import { getDiscountPrice } from "~/utils/getDiscountPrice";

// const cartProduct = {
//   img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-90x90.jpg",
//   info: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
//   rating: 3.5,
//   unitPrice: 3.29,
//   quantity: 1,
//   subtotal: 3.29,
// };

// const amount = 10;

// const cartProducts = Array(amount).fill(cartProduct);

const Cart = () => {
  const [productList, setProductList] = useState([]);
  const customerId = useSelector((state: RootState) => state.auth.customerId);
  const { data, isLoading } = useGetCartByCustomerQuery(customerId);
  const cart: CartInt[] = data ?? [];

  useEffect(() => {
    const getProductsFromCart = async () => {
      const result = await Promise.all(
        cart.map((item) =>
          getProductById(item.product_id).then((res) => res[0])
        )
      );

      console.log(result);

      setProductList(result);
    };

    getProductsFromCart();
  }, [cart]);

  return (
    <section className="profile-page-cart">
      <h2 className="profile-page-cart-title">Your Cart</h2>
      <p>
        There are <b>{productList.length}</b> products in your cart
      </p>
      <div className="profile-page-cart-content">
        <table className="profile-page-cart-content-table">
          <thead className="profile-page-cart-content-table-head">
            <tr>
              <th>Product</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody className="profile-page-cart-content-table-body">
            {productList &&
              productList.map((item) => (
                <tr className="profile-page-cart-content-table-body-row">
                  <td width="35%">
                    <Link to={`../../product/${item.slug}`}>
                      <img
                        className="profile-page-cart-content-table-body-row-image"
                        src={item.image}
                      />
                      <div className="profile-page-cart-content-table-body-row-image">
                        <h6>{item.name}</h6>
                        <Rating
                          className="rating"
                          name="read-only"
                          defaultValue={item.rating}
                          precision={0.5}
                          readOnly
                        />
                      </div>
                    </Link>
                  </td>
                  <td
                    className="profile-page-cart-content-table-body-row-price"
                    width="15%"
                  >
                    <span>
                      {getDiscountPrice(item.price, item.discount).toFixed(2)}
                    </span>
                  </td>
                  <td
                    className="profile-page-cart-content-table-body-row-quantity"
                    width="25%"
                  >
                    <QuantityBox stockQuantity={item.countInStock} />
                  </td>
                  <td
                    className="profile-page-cart-content-table-body-row-total-price"
                    width="15%"
                  >
                    <span>
                      {(
                        item.countInStock *
                        getDiscountPrice(item.price, item.discount)
                      ).toFixed(2)}
                    </span>
                  </td>
                  <td className="profile-page-cart-content-table-body-row-remove">
                    <IoClose />
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

            <button className="profile-page-cart-content-summary-checkout">
              <IoCartOutline className="me-2" />
              Checkout
            </button>
          </div>
      </div>
    </section>
  );
};

export default Cart;
