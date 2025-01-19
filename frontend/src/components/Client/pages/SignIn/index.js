import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import google_logo from "../../assets/images/google-logo.png";

import "./index.css";

import { MyContext } from "../../../../App";
import AuthContext from "../../../../context/AuthProvider";

import axios from "../../api/axios";
const LOGIN_URL = "/auth/login";

export default function SignIn() {
  const context = useContext(MyContext);
  useEffect(() => {
    context.setIsHeaderFooterShow(false);
  }, []);

  const { setAuth } = useContext(AuthContext);
  const usernameRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    usernameRef?.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username: username, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      // const accessToken = response?.data?.accessToken;
      // const roles = response?.data?.roles;
      setAuth({ username, pwd,  });

      setUsername("");
      setPwd("");
      setSuccess(true);
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 400) {
        setErrMsg("Missing username or password");
      } else if (error.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section className="message-section">
          <div className="content">
            <h2 className="message">Successfully Logged In!</h2>
            <span className="icon valid">
              <IoCheckmarkCircleOutline />
            </span>
            <span className="action">
              <a href="/">Go to Home</a>
            </span>
          </div>
        </section>
      ) : (
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
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
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
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
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
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
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
      )}
    </>
  );
}
