import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { BiSolidHide } from "react-icons/bi";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { login } from "../../api/user";

export default function AdminLogin() {
  const [username, setUsername] = useState("admin1");
  const [password, setPassword] = useState("Admin1@");
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();

  const focusInput = (index) => {
    setInputIndex(index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await login(username, password);

      if (result.success) {
        alert("Login successfully")
        navigate("/")
        return
      }
      alert(result.message || "Something went wrong")
    } catch (error) {
      console.log(error);
      alert("Something went wrong")
    }
  };

  return (
    <section className="login-page">
      <div className="login-page-header">
        <img src="https://cdn-icons-png.flaticon.com/512/906/906343.png" />
        <h2 className="login-page-header-title">Login</h2>
      </div>

      <div className="login-page-content">
        <form onSubmit={handleSubmit}>
          <div
            className={`login-page-content-item ${inputIndex === 0 && "focus"}`}
          >
            <span className="login-page-content-item-icon">
              <MdEmail />
            </span>
            <input
              type="text"
              value={username}
              className="login-page-content-item-control"
              placeholder="Enter your username"
              onFocus={() => focusInput(0)}
              onBlur={() => focusInput(null)}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
            />
          </div>
          <div
            className={`login-page-content-item ${inputIndex === 1 && "focus"}`}
          >
            <span className="login-page-content-item-icon">
              <RiLockPasswordFill />
            </span>
            <input
              type={`${isShowPassword === true ? "text" : "password"}`}
              value={password}
              className="login-page-content-item-control"
              placeholder="Enter your password"
              onFocus={() => focusInput(1)}
              onBlur={() => focusInput(null)}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="login-page-content-item-pass"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword === true ? <IoMdEye /> : <BiSolidHide />}
            </span>
          </div>

          <div className="login-page-content-item">
            <Button
              className="login-page-content-item-button"
              variant="outlined"
              type="submit"
            >
              Sign In
            </Button>
          </div>

          <div className="login-page-content-item">
            <Link
              to={"/forgot-password"}
              className="login-page-content-item-forgot"
            >
              FORGOT PASSWORD
            </Link>
          </div>

          <div className="login-page-content-divide">
            <div className="login-page-content-divide-border"></div>
            <span className="login-page-content-divide-label">or</span>
          </div>
          <div className="login-page-content-item-google">
            <img src="https://www.cdnlogo.com/logos/g/35/google-icon.svg" />
            <Button variant="outlined" color="error">
              Sign In with Google
            </Button>
          </div>
        </form>
        <span className="login-page-content-register">
          Don't have an account?&nbsp;
          <Link to={"/signup"}>Register</Link>
        </span>
      </div>
    </section>
  );
}
