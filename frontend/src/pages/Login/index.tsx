import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import google_logo from "~/assets/images/google-logo.png";
import Logo from "~/assets/images/logo.png";

// Hooks imported
// import useLocalStorage from "~/~/hooks/useLocalStorage";
// import useAuth from "~/~/hooks/useAuth";
import useInput from "~/hooks/useInput";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "~/features/auth/authApi";
import { setCredentials } from "~/features/auth/authSlice";
import "./index.css";

// import axios from "~/api/axios";
// const LOGIN_URL = "/auth/customer/login";

export default function Login() {
  // const { setAuth } = useAuth();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const usernameRef = useRef(null);
  const errRef = useRef(null);

  const [username, resetUsername, usernameAttrbs] = useInput(
    "username",
    "dinhhuy12221"
  ); //useState("abcd");
  const [password, setPassword] = useState("!1234Abc");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    usernameRef?.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { accessToken, customer } = await login({
        username,
        password,
      }).unwrap();

      dispatch(setCredentials({ customerId: customer._id, accessToken }));

      resetUsername("");
      setPassword("");
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
      if (!error?.response) {
        setErrorMessage("No Server Response");
      } else if (error.response?.status === 400) {
        setErrorMessage("Missing username or password");
      } else if (error.response?.status === 401) {
        setErrorMessage("Unauthorized");
      } else {
        setErrorMessage("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <section className="login-page">
      <div className="login-page-content">
        <div className="login-page-content-logo">
          <img src={Logo} />
        </div>
        <p
          ref={errRef}
          className={errorMessage ? "error-message" : "offscreen"}
          aria-live="assertive"
        >
          {errorMessage}
        </p>
        <form className="login-page-content-form" onSubmit={handleSubmit}>
          <h2 className="login-page-content-form-title">Sign In</h2>
          {/* <div className="form-group"> */}
          <TextField
            className=""
            id="username"
            label="Username"
            variant="standard"
            type="text"
            ref={usernameRef}
            autoComplete="off"
            {...usernameAttrbs}
            required
          />
          {/* </div> */}
          {/* <div className="form-group"> */}
          <TextField
            className=""
            id="password"
            label="Password"
            variant="standard"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          {/* </div> */}

          <span className="btn btn--underlined login-page-content-form-forgot-button">Forgot Password?</span>
          <button className="btn btn--primary login-page-content-form-signin-button" type="submit">
            Sign In
          </button>

          <div className="login-page-content-form-not-registered">
            Not Registered?{" "}
            <Link to="/Signup" className="btn btn--underlined">
              Sign Up
            </Link>
            <Link to="/" className="btn btn--underlined">
              Home
            </Link>
          </div>

          <h4>Or continue with social account</h4>

          <div className="login-page-content-form-social-links">
            <Link to="#">
              <FaFacebookF />
            </Link>
            <Link to="#">
              <FaTwitter />
            </Link>
            <Link to="#">
              <FaInstagram />
            </Link>
          </div>
          <div className="login-page-content-form-google">
            <button className="btn btn--outlined login-page-content-form-google-button">
              <img
                src={google_logo}
                style={{ width: "25px", height: "25px" }}
                alt="Google image"
              />
              <span>Continue with Google</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
