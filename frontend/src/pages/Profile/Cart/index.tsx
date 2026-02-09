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
import { RootState } from '~/app/store';
import { useGetProductByIdQuery } from "~/features/product/productApi";

const cartProduct = {
  img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-90x90.jpg",
  info: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
  rating: 3.5,
  unitPrice: 3.29,
  quantity: 1,
  subtotal: 3.29,
};

const amount = 10;

const cartProducts = Array(amount).fill(cartProduct);

const Cart = () => {
  const [productList, setProductList] = useState(null);
  const customerId = useSelector((state: RootState) => state.auth.customerId)
  const { data: cart, isLoading } = useGetCartByCustomerQuery(customerId);

  useEffect(() => {
    const getProductList = async () => {
      const tmp = cart.map((item) => useGetProductByIdQuery(item.product_id))
      setProductList(tmp)
    }
  }, [])

  return (
    <section className="profile-page-cart">
      <h2 className="profile-page-cart-title">Your Cart</h2>
      <p>
        There are <b>{amount}</b> products in your cart
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
              productList.map((product, index) => (
                <tr className="text-center" key={index}>
                  <td width="35%">
                    <Link to={`product/${product.slug}`}>
                      <div className="d-flex align-items-center cartItemImgWrapper">
                        <div className="imgWrapper">
                          <img src={product.img} className="w-100" />
                        </div>
                        <div className="info text-start">
                          <h6>{product.name}</h6>
                          <Rating
                            className="rating"
                            name="read-only"
                            defaultValue={product.rating}
                            precision={0.5}
                            readOnly
                          />
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="unitPrice" width="15%">
                    <span>{product.price}</span>
                  </td>
                  <td className="quantity" width="25%">
                    <QuantityBox stockQuantity={cart.product_count} />
                  </td>
                  <td className="subtotal" width="15%">
                    <span>{cart.product_count}</span>
                  </td>
                  <td className="remove">
                    <span>
                      <IoClose />
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <div className="col-md-3">
          <div className="card shadow p-3 cartDetails sticky-top pt-3">
            <h4>CART TOTALS</h4>
            <div className="d-flex align-items-center mb-2">
              <span>Subtotal</span>
              <span className="ms-auto text-red font-weight-bold">$3.29</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <span>Shipping</span>
              <span className="ms-auto">Free</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <span>Estimated for</span>
              <span className="ms-auto text-end text-red">United Kingdom</span>
            </div>
            <div className="d-flex align-items-center">
              <span>Total</span>
              <span className="ms-auto text-red">$3.29</span>
            </div>

            <Button className="bg-red btn--lg btn-round mt-3">
              <IoCartOutline className="me-2" />
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
