import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../components/QuantityBox";
import { IoClose } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { MyContext } from "../../App";

import "./index.css";

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

export default function Cart() {
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHeaderFooterShow(true);
  }, []);

  return (
    <>
      <section className="section cartPage">
        <div className="container">
          <h2 className="hd">Your Cart</h2>
          <p>
            There are <b className="text-red">{amount}</b> products in your cart
          </p>
          <div className="row">
            <div className="col-md-9">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr className="text-center">
                      <th width="35%">Product</th>
                      <th width="15%">Unit Price</th>
                      <th width="25%">Quantity</th>
                      <th width="15%">Subtotal</th>
                      <th width="10%">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartProducts && cartProducts.map((cartProduct, index) => (
                      <tr className="text-center" key={index}>
                        <td width="35%">
                          <Link to="/product/1">
                            <div className="d-flex align-items-center cartItemImgWrapper">
                              <div className="imgWrapper">
                                <img src={cartProduct.img} className="w-100" />
                              </div>
                              <div className="info text-start">
                                <h6>{cartProduct.info}</h6>
                                <Rating
                                  className="rating"
                                  name="read-only"
                                  defaultValue={cartProduct.rating}
                                  precision={0.5}
                                  readOnly
                                />
                              </div>
                            </div>
                          </Link>
                        </td>
                        <td className="unitPrice" width="15%">
                          <span>{cartProduct.unitPrice}</span>
                        </td>
                        <td className="quantity" width="25%">
                          <QuantityBox quantity={cartProduct.quantity} />
                        </td>
                        <td className="subtotal" width="15%">
                          <span>{cartProduct.subtotal}</span>
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
              </div>
            </div>

            <div className="col-md-3">
              <div className="card shadow p-3 cartDetails sticky-top pt-3">
                <h4>CART TOTALS</h4>
                <div className="d-flex align-items-center mb-2">
                  <span>Subtotal</span>
                  <span className="ms-auto text-red font-weight-bold">
                    $3.29
                  </span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <span>Shipping</span>
                  <span className="ms-auto">Free</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <span>Estimated for</span>
                  <span className="ms-auto text-end text-red">
                    United Kingdom
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <span>Total</span>
                  <span className="ms-auto text-red">$3.29</span>
                </div>

                <Button className="bg-red btn-lg btn-big btn-round mt-3">
                  <IoCartOutline className="me-2" />
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
