import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { BiSolidHide } from "react-icons/bi";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Login() {
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHideSidebarAndHeader(true);
    window.scrollTo(0, 0);
  }, []);

  const focusInput = (index) => {
    setInputIndex(index);
  };
  return (
    <section className="loginSection">
      <div className="box">
        <div className="logo text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/906/906343.png"
            width={100}
          />
          <h5 className="font-weight-bolder mt-3">Login to Hotash</h5>
        </div>

        <div className="wrapper mt-3 card">
          <form>
            <div
              className={`form-group position-relative ${
                inputIndex === 0 && "focus"
              }`}
            >
              <span className="icon d-flex align-items-center">
                <MdEmail />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
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
                <RiLockPasswordFill />
              </span>
              <input
                type={`${isShowPassword === true ? "text" : "password"}`}
                className="form-control"
                placeholder="Enter your password"
                onFocus={() => focusInput(1)}
                onBlur={() => focusInput(null)}
              />
              <span
                className="toggleShowPassword d-flex align-items-center"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword === true ? <IoMdEye /> : <BiSolidHide />}
              </span>
            </div>

            <div className="form-group">
              <Button className="btn-blue btn-lg btn-big w-100">Sign In</Button>
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
            <div className="form-group loginWithGoogle position-relative">
              <div className="logo">
                <img src="https://www.cdnlogo.com/logos/g/35/google-icon.svg" />
              </div>
              <Button variant="outlined" color="error" className="btn-lg w-100">
                Sign In with Google
              </Button>
            </div>
          </form>
          <span className="text-center mt-2">
            Don't have an account?&nbsp;
            <Link to={"/signup"} className="link color">
              Register
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
