import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { FaCheck, FaFacebookF, FaTimes } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram, FaInfoCircle } from "react-icons/fa";
import google_logo from "~/assets/images/google-logo.png";
// import axios from "~/api/axios";
import { useRegisterMutation } from "~/features/auth/authApi";
import Logo from "~/assets/images/logo.png";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import "./index.css";

const FULLNAME_REGEX = /^[a-zA-Z][a-zA-Z]{3,23}$/;
const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,24}$/;
const REGISTER_URL = "/auth/register";

export default function Signup() {
  const fullnameRef = useRef();
  const userRef = useRef();
  const errRef = useRef();

  const [fullname, setFullname] = useState("");
  const [validFullname, setValidFullname] = useState(false);
  const [fullnameFocus, setFullnameFocus] = useState(false);

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [password, setPwd] = useState("");
  const [validPassword, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [matchPwd, setMatchPwd] = useState(false);

  const [match, setMatch] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [register, { isLoading }] = useRegisterMutation();

  useEffect(() => {
    fullnameRef?.current.focus();
  }, []);

  useEffect(() => {
    const result = FULLNAME_REGEX.test(fullname);
    setValidFullname(result);
  }, [fullname]);

  useEffect(() => {
    const result = USERNAME_REGEX.test(username);
    // console.log(result);
    // console.log(username);
    setValidUsername(result);
  }, [username]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    setValidPwd(result);
    const match = password === matchPwd;
    setValidMatch(match);
  }, [password, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [username, password, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = FULLNAME_REGEX.test(fullname);
    const v2 = USERNAME_REGEX.test(username);
    const v3 = PWD_REGEX.test(password);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      // const response = await axios.post(
      //   REGISTER_URL,
      //   JSON.stringify({ fullname: fullname, username: username, password: password }),
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     withCredentials: false,
      //   }
      // );

      const response = await register({
        fullname,
        username,
        password,
      }).unwrap();

      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response));

      setSuccess(true);
      // Clear input fields
    } catch (error) {
      if (!error?.status) {
        setErrMsg("No Server Response!");
      } else {
        setErrMsg(error.data?.message);
      }

      // else if (error?.status === 409) {
      //   setErrMsg(error.data.message);
      // } else if (error?.status === 400) {
      //   setErrMsg("All fields are required!");
      // } else {
      //   setErrMsg("Registration Failed!");
      // }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section className="message-section">
          <div className="content">
            <h2 className="message">Successfully Registered!</h2>
            <span className="icon valid">
              <IoCheckmarkCircleOutline />
            </span>
            <span className="action">
              <a href="/login">Sign In</a>
            </span>
          </div>
        </section>
      ) : (
        <section className="signup-page">
          <div className="signup-page-content">
            <div className="signup-page-content-logo">
              <img src={Logo} />
            </div>

            <p
              ref={errRef}
              className={errMsg ? "error-message" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <form className="signup-page-content-form" onSubmit={handleSubmit}>
              <h2 className="signup-page-content-form-title">Register</h2>
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
                <div className="signup-page-content-form-fullname">
                  <TextField
                    label={
                      <>
                        Fullname:
                        <span className={validFullname ? "valid" : "offscreen"}>
                          <FaCheck />
                        </span>
                        <span
                          className={
                            validFullname || !fullname ? "offscreen" : "invalid"
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
                    &nbsp; 4 to 24 characters.
                    <br />
                    Not allowed numbers and special characters.
                  </p>
                </div>
                <div className="signup-page-content-form-username">
                  <TextField
                    label={
                      <>
                        Username:
                        <span className={validUsername ? "valid" : "offscreen"}>
                          <FaCheck />
                        </span>
                        <span
                          className={
                            validUsername || !username ? "offscreen" : "invalid"
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
                    &nbsp; 4 to 24 characters. Must begin with a letter.
                    Letters, numbers, underscores, hyphens allowed.
                  </p>
                </div>
                <div className="signup-page-content-form-password">
                  <TextField
                    label={
                      <>
                        Password:
                        <span className={validPassword ? "valid" : "offscreen"}>
                          <FaCheck />
                        </span>
                        <span
                          className={
                            validPassword || !password ? "offscreen" : "invalid"
                          }
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
                    aria-invalid={validPassword ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                    className="w-100"
                    variant="standard"
                  />
                  <p
                    id="pwdnote"
                    className={
                      pwdFocus && password && !validPassword
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <FaInfoCircle />
                    &nbsp; 8 to 24 characters. Must include uppercase and
                    lowercase letters, a number and a special character. Allowed
                    special characters:&nbsp;
                    <span aria-label="exclamation">!</span>
                    <span aria-label="at symbol">@</span>
                    <span aria-label="hashtag">#</span>
                    <span aria-label="dollar sign">$</span>
                    <span aria-label="percent">%</span>
                  </p>
                </div>
                <div className="signup-page-content-form-confirm-password">
                  <TextField
                    label={
                      <>
                        Confirm Password:
                        <span className={validMatch ? "valid" : "offscreen"}>
                          <FaCheck />
                        </span>
                        <span
                          className={
                            validMatch || !matchPwd ? "offscreen" : "invalid"
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

              <a className="btn btn--underlined signup-page-content-form-forgot-button">
                Forgot Password?
              </a>
              <div className="signup-page-content-form-signup-button">
                <button
                  className="btn btn--primary"
                  type="submit"
                  disabled={
                    !validUsername || !validMatch || !validMatch ? true : false
                  }
                >
                  Sign Up
                </button>
              </div>

              <div className="signup-page-content-form-already-registered">
                Already Registered?{" "}
                <Link to="/login" className="border-effect">
                  Sign In
                </Link>
                <Link to="/" className="border-effect">
                  Home
                </Link>
              </div>

              <h3>
                Or continue with social account
              </h3>

              <div className="signup-page-content-form-social-links">
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
              <div className="signup-page-content-form-google">
                <button className="btn btn--outlined signup-page-content-form-google-button">
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
      )}
    </>
  );
}
