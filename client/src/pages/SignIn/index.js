import React, { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import google_logo from "../../assets/images/google-logo.png";

import './index.css'

export default function SignIn() {
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHeaderFooterShow(false);
  }, []);
  
  return (
    <>
      <section className="section signInPage">
        <div className="container">
          <div className="box card p-3 shadow border-0">
            <div className="text-center">
              <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-logo.png"
                className="w-50"
              />
            </div>

            <form className="mt-3">
              <h2>Sign In</h2>
              <div className="form-group">
                <TextField
                  id="standard-basic"
                  label="Email"
                  type="email"
                  required
                  variant="standard"
                  className="w-100"
                />
              </div>
              <div className="form-group">
                <TextField
                  id="standard-basic"
                  label="Password"
                  type="password"
                  required
                  variant="standard"
                  className="w-100"
                />
              </div>

              <a className="border-effect cursor">Forgot Password?</a>
              <br />
              <Button className="btn-red btn-lg btn-big mt-3 w-100">
                Sign In
              </Button>

              <div className="d-flex mt-3 w-100 txt">
                <span>
                  Not Registered?{" "}
                  <Link to="/signup" className="border-effect">
                    Sign Up
                  </Link>
                </span>
                <span className="ms-auto">
                  <Link
                    to="/"
                    onClick={() => context.setIsHeaderFooterShow(true)}
                    className="border-effect"
                  >
                    Home
                  </Link>
                </span>
              </div>

              <h6 className="mt-4 text-center">
                Or continue with social account
              </h6>

              <div className="socials">
                <ul className="list list-inline text-center mb-0 mt-2 socials">
                  <li className="list-inline-item">
                    <Link to="#">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <FaInstagram />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-100 text-center mt-2">
                <Button className="loginWithGoogle" variant="outlined">
                  <img
                    src={google_logo}
                    style={{ width: "25px", height: "25px" }}
                    alt="Google image"
                    className="me-2"
                  />
                  <span>Continue with Google</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
