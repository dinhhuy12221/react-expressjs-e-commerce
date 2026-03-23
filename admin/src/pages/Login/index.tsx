import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { BiSolidHide } from "react-icons/bi";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./index.css"

export default function AdminLogin() {
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const focusInput = (index) => {
    setInputIndex(index);
  };
  return (
    <section className="login-page">
        <div className="login-page-header">
          <img
            src="https://cdn-icons-png.flaticon.com/512/906/906343.png"
          />
          <h2 className="login-page-header-title">Login</h2>
        </div>

        <div className="login-page-content">
          <form>
            <div
              className={`login-page-content-item ${
                inputIndex === 0 && "focus"
              }`}
            >
              <span className="login-page-content-item-icon">
                <MdEmail />
              </span>
              <input
                type="text"
                className="login-page-content-item-control"
                placeholder="Enter your username"
                onFocus={() => focusInput(0)}
                onBlur={() => focusInput(null)}
                autoFocus
              />
            </div>
            <div
              className={`login-page-content-item ${
                inputIndex === 1 && "focus"
              }`}
            >
              <span className="login-page-content-item-icon">
                <RiLockPasswordFill />
              </span>
              <input
                type={`${isShowPassword === true ? "text" : "password"}`}
                className="login-page-content-item-control"
                placeholder="Enter your password"
                onFocus={() => focusInput(1)}
                onBlur={() => focusInput(null)}
              />
              <span
                className="login-page-content-item-pass"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword === true ? <IoMdEye /> : <BiSolidHide />}
              </span>
            </div>

            <div className="login-page-content-item">
              <Button className="login-page-content-item-button" variant="outlined">Sign In</Button>
            </div>

            <div className="login-page-content-item">
              <Link to={"/forgot-password"} className="login-page-content-item-forgot" >
                FORGOT PASSWORD
              </Link>
            </div>

            <div className="login-page-content-divide">
              <div className="login-page-content-divide-border"></div>
              <span className="login-page-content-divide-label">or</span>
            </div>
            <div className="login-page-content-item-google">
                <img src="https://www.cdnlogo.com/logos/g/35/google-icon.svg" />
              <Button variant="outlined" color="error" >
                Sign In with Google
              </Button>
            </div>
          </form>
          <span className="login-page-content-register">
            Don't have an account?&nbsp;
            <Link to={"/signup"} >
              Register
            </Link>
          </span>
        </div>
    </section>
  );
}
