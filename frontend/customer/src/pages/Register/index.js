import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { FaCheck, FaFacebookF, FaTimes } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram, FaInfoCircle } from "react-icons/fa";
import google_logo from "../../assets/images/google-logo.png";
import axios from "../../api/axios";

import Logo from "../../assets/images/logo.png";
import "./index.css";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const FULLNAME_REGEX = /^[a-zA-Z][a-zA-Z]{3,23}$/;
const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,24}$/;
const REGISTER_URL = "/auth/register";

export default function Register() {

  const fullnameRef = useRef();
  const userRef = useRef();
  const errRef = useRef();

  const [fullname, setFullname] = useState("");
  const [validFullname, setValidFullname] = useState(false);
  const [fullnameFocus, setFullnameFocus] = useState(false);

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [matchPwd, setMatchPwd] = useState(false);

  const [match, setMatch] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fullnameRef?.current.focus();
  }, []);

  useEffect(() => {
    const result = FULLNAME_REGEX.test(fullname)
    setValidFullname(result);
  }, [fullname])

  useEffect(() => {
    const result = USERNAME_REGEX.test(username);
    // console.log(result);
    // console.log(username);
    setValidUsername(result);
  }, [username]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [username, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = FULLNAME_REGEX.test(fullname);
    const v2 = USERNAME_REGEX.test(username);
    const v3 = PWD_REGEX.test(pwd);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ fullname: fullname, username: username, password: pwd }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: false,
        }
      );
      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      // Clear input fields
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section className="message-section">
          <div className="content">
            <h2 className="message">Successfully Registered!</h2>
            <span className="icon valid"><IoCheckmarkCircleOutline  /></span>
            <span className="action">
              <a href="/login">Sign In</a>
            </span>
          </div>
        </section>
      ) : (
        <section className="register-section">
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
                <h2>Register</h2>
                <div className="row">
                  {/* <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      // id="standard-basic"
                      label="Name"
                      type="text"
                      required
                      variant="standard"
                      className="w-100"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      id="standard-basic"
                      label="Contact No."
                      type="text"
                      required
                      variant="standard"
                      className="w-100"
                    />
                  </div>
                </div> */}
                  <div className="form-group">
                    <TextField
                      label={
                        <>
                          Fullname:
                          <span className={validFullname ? "valid" : "hide"}>
                            <FaCheck />
                          </span>
                          <span
                            className={
                              validFullname || !fullname ? "hide" : "invalid"
                            }
                          >
                            <FaTimes />
                          </span>
                        </>
                      }
                      className="w-100"
                      variant="standard"
                      type="text"
                      id="fullname"
                      ref={fullnameRef}
                      autoComplete="off"
                      onChange={(e) => setFullname(e.target.value)}
                      required
                      aria-invalid={validFullname ? "false" : "true"}
                      aria-describedby="fullnamenote"
                      onFocus={() => setFullnameFocus(true)}
                      onBlur={() => setFullnameFocus(false)}
                    />
                    <p
                      id="fullnamenote"
                      className={
                        fullnameFocus && fullname && !validFullname
                          ? "instructions"
                          : "offscreen"
                      }
                    >
                      <FaInfoCircle />
                      &nbsp; 4 to 24 characters.<br/>
                      Not allowed numbers and special characters.
                    </p>
                  </div>
                  <div className="form-group">
                    <TextField
                      label={
                        <>
                          Username:
                          <span className={validUsername ? "valid" : "hide"}>
                            <FaCheck />
                          </span>
                          <span
                            className={
                              validUsername || !username ? "hide" : "invalid"
                            }
                          >
                            <FaTimes />
                          </span>
                        </>
                      }
                      className="w-100"
                      variant="standard"
                      type="text"
                      id="username"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      aria-invalid={validUsername ? "false" : "true"}
                      aria-describedby="uidnote"
                      onFocus={() => setUsernameFocus(true)}
                      onBlur={() => setUsernameFocus(false)}
                    />
                    <p
                      id="uidnote"
                      className={
                        usernameFocus && username && !validUsername
                          ? "instructions"
                          : "offscreen"
                      }
                    >
                      <FaInfoCircle />
                      &nbsp; 4 to 24 characters.
                      <br />
                      Must begin with a letter.
                      <br />
                      Letters, numbers, underscores, hyphens allowed.
                    </p>
                  </div>
                  <div className="form-group">
                    <TextField
                      label={
                        <>
                          Password:
                          <span className={validPwd ? "valid" : "hide"}>
                            <FaCheck />
                          </span>
                          <span
                            className={validPwd || !pwd ? "hide" : "invalid"}
                          >
                            <FaTimes />
                          </span>
                        </>
                      }
                      type="password"
                      id="password"
                      autoComplete="off"
                      onChange={(e) => setPwd(e.target.value)}
                      required
                      aria-invalid={validPwd ? "false" : "true"}
                      aria-describedby="pwdnote"
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                      className="w-100"
                      variant="standard"
                    />
                    <p
                      id="pwdnote"
                      className={
                        pwdFocus && pwd && !validPwd
                          ? "instructions"
                          : "offscreen"
                      }
                    >
                      <FaInfoCircle />
                      &nbsp; 8 to 24 characters.
                      <br />
                      Must include uppercase and lowercase letters, a number and
                      a special character.
                      <br />
                      Allowed special characters:&nbsp;
                      <span aria-label="exclamation">!</span>
                      <span aria-label="at symbol">@</span>
                      <span aria-label="hashtag">#</span>
                      <span aria-label="dollar sign">$</span>
                      <span aria-label="percent">%</span>
                    </p>
                  </div>
                  <div className="form-group">
                    <TextField
                      label={
                        <>
                          Confirm Password:
                          <span className={validMatch ? "valid" : "hide"}>
                            <FaCheck />
                          </span>
                          <span
                            className={
                              validMatch || !matchPwd ? "hide" : "invalid"
                            }
                          >
                            <FaTimes />
                          </span>
                        </>
                      }
                      type="password"
                      id="confirm-password"
                      autoComplete="off"
                      onChange={(e) => setMatchPwd(e.target.value)}
                      required
                      aria-invalid={validMatch ? "false" : "true"}
                      aria-describedby="confirmnote"
                      onFocus={() => setMatchFocus(true)}
                      onBlur={() => setMatchFocus(false)}
                      className="w-100"
                      variant="standard"
                    />
                    <p
                      id="confirmnote"
                      className={
                        matchFocus && matchPwd && !validMatch
                          ? "instructions"
                          : "offscreen"
                      }
                    >
                      <FaInfoCircle />
                      &nbsp; Must match the first password input field.
                    </p>
                  </div>
                </div>

                <a className="border-effect cursor">Forgot Password?</a>
                <div className="d-flex align-items-center mt-2 mb-3">
                  <Button
                    className="btn-red btn-lg btn-big mt-3 w-100"
                    type="submit"
                    disabled={
                      !validUsername || !validMatch || !validMatch
                        ? true
                        : false
                    }
                  >
                    Sign Up
                  </Button>
                </div>

                <div className="d-flex mt-3 w-100 txt">
                  <span>
                    Already Registered?{" "}
                    <Link to="/signin" className="border-effect">
                      Sign In
                    </Link>
                  </span>
                  <span className="ms-auto">
                    <Link
                      to="/"
                      className="border-effect"
                    >
                      Home
                    </Link>
                  </span>
                </div>

                <h6 className="mt-4 text-center">
                  Or continue with social account
                </h6>

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
