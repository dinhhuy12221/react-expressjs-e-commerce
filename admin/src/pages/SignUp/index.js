import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { BiSolidHide } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function SignUp() {
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmedPassword, setIsShowConfirmedPassword] = useState(false);
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHideSidebarAndHeader(true);
    window.scrollTo(0, 0);
  }, []);

  const focusInput = (index) => {
    setInputIndex(index);
  };
  return (
    <section className="loginSection signUpSection">
      <div className="row">
        <div className="col-md-8 d-flex align-items-center justify-content-center flex-column part1">
          <h1>
            BEST UX/UI FASHION{" "}
            <span className="text-sky">ECOMMERCE DASHBOARD</span> & ADMIN PANEL
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>

          <div className="w-100 mt-4">
            <Link to={"/"}>
              <Button className="btn-blue btn-log btn-big">
                <IoMdHome />
                Go To Home
              </Button>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="box">
            <div className="logo text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/906/906343.png"
                width={100}
              />
              <h5 className="font-weight-bolder mt-3">
                Register a new account
              </h5>
            </div>

            <div className="wrapper mt-3 card">
              <form>
                <div
                  className={`form-group position-relative ${
                    inputIndex === 0 && "focus"
                  }`}
                >
                  <span className="icon d-flex align-items-center">
                    <FaUserCircle />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    onFocus={() => focusInput(0)}
                    onBlur={() => focusInput(null)}
                    autoFocus
                  />
                </div>
                <div
                  className={`form-group position-relative ${
                    inputIndex === 1 && "focus"
                  }`}
                >
                  <span className="icon d-flex align-items-center">
                    <MdEmail />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email"
                    onFocus={() => focusInput(1)}
                    onBlur={() => focusInput(null)}
                  />
                </div>
                <div
                  className={`form-group position-relative ${
                    inputIndex === 2 && "focus"
                  }`}
                >
                  <span className="icon d-flex align-items-center">
                    <RiLockPasswordFill />
                  </span>
                  <input
                    type={`${isShowPassword === true ? "text" : "password"}`}
                    className="form-control"
                    placeholder="Enter your password"
                    onFocus={() => focusInput(2)}
                    onBlur={() => focusInput(null)}
                  />
                  <span
                    className="toggleShowPassword d-flex align-items-center"
                    onClick={() => setIsShowPassword(!isShowPassword)}
                  >
                    {isShowPassword === true ? <IoMdEye /> : <BiSolidHide />}
                  </span>
                </div>
                <div
                  className={`form-group position-relative ${
                    inputIndex === 3 && "focus"
                  }`}
                >
                  <span className="icon d-flex align-items-center">
                    <IoShieldCheckmark />
                  </span>
                  <input
                    type={`${
                      isShowConfirmedPassword === true ? "text" : "password"
                    }`}
                    className="form-control"
                    placeholder="Confirm your password"
                    onFocus={() => focusInput(3)}
                    onBlur={() => focusInput(null)}
                  />
                  <span
                    className="toggleShowPassword d-flex align-items-center"
                    onClick={() =>
                      setIsShowConfirmedPassword(!isShowConfirmedPassword)
                    }
                  >
                    {isShowConfirmedPassword === true ? (
                      <IoMdEye />
                    ) : (
                      <BiSolidHide />
                    )}
                  </span>
                </div>
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="I agree to the all Terms & Conditions"
                  className="mb-3"
                />

                <div className="form-group">
                  <Button className="btn-blue btn-lg btn-big w-100">
                    Sign Up
                  </Button>
                </div>

                <div className="form-group text-center">
                  <Link to={"/forgot-password"} className="link">
                    FORGOT PASSWORD
                  </Link>
                </div>

                <div className="d-flex align-items-center justify-content-center or mt-5 mb-5">
                  <div className="line"></div>
                  <span className="txt">or</span>
                </div>
                <div className="form-group signUpWithGoogle position-relative">
                  <div className="logo">
                    <img src="https://www.cdnlogo.com/logos/g/35/google-icon.svg" />
                  </div>
                  <Button
                    variant="outlined"
                    color="error"
                    className="btn-lg w-100"
                  >
                    Sign Up with Google
                  </Button>
                </div>
              </form>
              <span className="text-center d-block mt-3">
                Already have an account?&nbsp;
                <Link to={"/login"} className="link color">
                  Sign In
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
