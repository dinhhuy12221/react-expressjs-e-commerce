import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import google_logo from "../../assets/images/google-logo.png";

// Hooks imported
// import useLocalStorage from "../../../../hooks/useLocalStorage";
// import useAuth from "../../../../hooks/useAuth";
import useInput from "../../hooks/useInput";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../features/auth/authApi";
// Styles
import "./index.css";
import { setCredentials } from "../../features/auth/authSlice";

// import axios from "../../api/axios";
// const LOGIN_URL = "/auth/customer/login";

export default function Login() {
  // const { setAuth } = useAuth();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const usernameRef = useRef();
  const errRef = useRef();

  const [username, resetUsername, usernameAttrbs] = useInput(
    "username",
    "dinhhuy12221"
  ); //useState("abcd");
  const [password, setPassword] = useState("!1234Abc");
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    usernameRef?.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post(
      //   LOGIN_URL,
      //   JSON.stringify({ username: username, password: password }),
      //   {
      //     headers: { "Content-Type": "application/json" },
      //     withCredentials: true,
      //   }
      // );
      // // console.log(JSON.stringify(response?.data));
      // const accessToken = response?.data?.accessToken;
      // setAuth({ username, accessToken, });

      const userData = await login({ username, password }).unwrap();

      dispatch(setCredentials({ ...userData, username }));

      // setUsername("");
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

            <p
              ref={errRef}
              className={errorMessage ? "errorMessage" : "offscreen"}
              aria-live="assertive"
            >
              {errorMessage}
            </p>
            <form onSubmit={handleSubmit}>
              <h2>Sign In</h2>
              <div className="form-group">
                <TextField
                  className="w-100"
                  id="username"
                  label="Username"
                  variant="standard"
                  type="text"
                  ref={usernameRef}
                  autoComplete="off"
                  {...usernameAttrbs}
                  required
                />
              </div>
              <div className="form-group">
                <TextField
                  className="w-100"
                  id="password"
                  label="Password"
                  variant="standard"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>

              <a className="border-effect cursor">Forgot Password?</a>
              <br />
              <Button
                className="btn-red btn-lg btn-big mt-3 w-100"
                type="submit"
              >
                Sign In
              </Button>

              <div className="d-flex mt-3 w-100 txt">
                <span>
                  Not Registered?{" "}
                  <Link to="/register" className="border-effect">
                    Sign Up
                  </Link>
                </span>
                <span className="ms-auto">
                  <Link to="/" className="border-effect">
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
