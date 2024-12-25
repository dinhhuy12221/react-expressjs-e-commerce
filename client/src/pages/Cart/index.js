import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../components/QuantityBox";
import { IoClose } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

import './index.css'

export default function Cart() {
  return (
    <>
      <section className="section cartPage">
        <div className="container">
          <h2 className="hd">Your Cart</h2>
          <p>
            There are <b className="text-red">3</b> products in your cart
          </p>
          <div className="row">
            <div className="col-md-9 pe-5">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th width="45%">Product</th>
                      <th width="15%">Unit Price</th>
                      <th width="25%">Quantity</th>
                      <th width="15%">Subtotal</th>
                      <th width="10%">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="45%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartItemImgWrapper">
                            <div className="imgWrapper">
                              <img
                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-90x90.jpg"
                                className="w-100"
                              />
                            </div>

                            <div className="info">
                              <h6>
                                Angie's Boomchickapop Sweet & Salty Kettle Corn
                              </h6>
                              <Rating
                                name="read-only"
                                defaultValue={3.5}
                                precision={0.5}
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">
                        <span>$3.29</span>
                      </td>
                      <td width="25%">
                        <QuantityBox />
                      </td>
                      <td width="15%">
                        <span>$3.29</span>
                      </td>
                      <td width="10%">
                        <span className="remove">
                          <IoClose />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td width="45%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartItemImgWrapper">
                            <div className="imgWrapper">
                              <img
                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-90x90.jpg"
                                className="w-100"
                              />
                            </div>

                            <div className="info">
                              <h6>
                                Angie's Boomchickapop Sweet & Salty Kettle Corn
                              </h6>
                              <Rating
                                name="read-only"
                                defaultValue={3.5}
                                precision={0.5}
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">
                        <span>$3.29</span>
                      </td>
                      <td width="25%">
                        <QuantityBox />
                      </td>
                      <td width="15%">
                        <span>$3.29</span>
                      </td>
                      <td width="10%">
                        <span className="remove">
                          <IoClose />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td width="45%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartItemImgWrapper">
                            <div className="imgWrapper">
                              <img
                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-90x90.jpg"
                                className="w-100"
                              />
                            </div>

                            <div className="info">
                              <h6>
                                Angie's Boomchickapop Sweet & Salty Kettle Corn
                              </h6>
                              <Rating
                                name="read-only"
                                defaultValue={3.5}
                                precision={0.5}
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">
                        <span>$3.29</span>
                      </td>
                      <td width="25%">
                        <QuantityBox />
                      </td>
                      <td width="15%">
                        <span>$3.29</span>
                      </td>
                      <td width="10%">
                        <span className="remove">
                          <IoClose />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td width="45%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartItemImgWrapper">
                            <div className="imgWrapper">
                              <img
                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-90x90.jpg"
                                className="w-100"
                              />
                            </div>

                            <div className="info">
                              <h6>
                                Angie's Boomchickapop Sweet & Salty Kettle Corn
                              </h6>
                              <Rating
                                name="read-only"
                                defaultValue={3.5}
                                precision={0.5}
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">
                        <span>$3.29</span>
                      </td>
                      <td width="25%">
                        <QuantityBox />
                      </td>
                      <td width="15%">
                        <span>$3.29</span>
                      </td>
                      <td width="10%">
                        <span className="remove">
                          <IoClose />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td width="45%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartItemImgWrapper">
                            <div className="imgWrapper">
                              <img
                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-90x90.jpg"
                                className="w-100"
                              />
                            </div>

                            <div className="info">
                              <h6>
                                Angie's Boomchickapop Sweet & Salty Kettle Corn
                              </h6>
                              <Rating
                                name="read-only"
                                defaultValue={3.5}
                                precision={0.5}
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">
                        <span>$3.29</span>
                      </td>
                      <td width="25%">
                        <QuantityBox />
                      </td>
                      <td width="15%">
                        <span>$3.29</span>
                      </td>
                      <td width="10%">
                        <span className="remove">
                          <IoClose />
                        </span>
                      </td>
                    </tr>
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
                  <span className="ms-auto text-red">United Kingdom</span>
                </div>
                <div className="d-flex align-items-center">
                  <span>Total</span>
                  <span className="ms-auto text-red">$3.29</span>
                </div>

                <Button className="bg-red btn-lg btn-big btn-round mt-3">
                  <IoCartOutline className="me-2" />
                  Proceed To Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
