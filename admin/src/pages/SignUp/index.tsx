import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { BiSolidHide } from "react-icons/bi";
import { IoShieldCheckmark } from "react-icons/io5";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import "./index.css";
import { isValidPassword, isValidUsername } from "../../utils/isInputValid";
import { signup } from "../../api/user";

export default function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("admin1");
  const [password, setPassword] = useState("Admin1@");
  const [confirmedPassword, setConfirmedPassword] = useState("Admin1@");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmedPassword, setIsShowConfirmedPassword] = useState(false);
  const [inputIndex, setInputIndex] = useState<any>(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidUsername(username)) {
      alert("Username cannot contain spaces and must be 3–20 valid characters");
      return;
    }

    if (!isValidPassword(password)) {
      alert(
        "Password must be at least 6 characters, include uppercase, lowercase, and a number"
      );
      return;
    }

    if (password !== confirmedPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const result = await signup({
        username,
        password,
      });

      if (result?.ok) {
        alert("User created successfully")
        navigate("/login");
        return;
      }

      alert(result?.message || "Something went wrong");
    } catch (error) {
      alert("Server error. Please try again.");
    }
  };

  return (
    <section className="signup-page">
      <div className="signup-page-header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/906/906343.png"
          width={80}
        />
        <h2 className="font-weight-bolder mt-3">Register</h2>
      </div>

      <div className="signup-page-content">
        <form
          className="signup-page-content-form"
          method="POST"
          onSubmit={handleSubmit}
        >
          {/* <div
            className={`signup-page-content-form-item ${
              inputIndex === 0 && "focus"
            }`}
          >
            <span className="signup-page-content-form-item-icon">
              <FaUserCircle />
            </span>
            <input
              type="text"
              className="signup-page-content-form-item-control"
              placeholder="Enter your name"
              onFocus={() => focusInput(0)}
              onBlur={() => focusInput(null)}
              autoFocus
            />
          </div> */}
          <div
            className={`signup-page-content-form-item ${
              inputIndex === 1 && "focus"
            }`}
          >
            <span className="signup-page-content-form-item-icon">
              <MdEmail />
            </span>
            <input
              type="text"
              className="signup-page-content-form-item-control"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setInputIndex(1)}
              onBlur={() => setInputIndex(null)}
            />
          </div>
          <div
            className={`signup-page-content-form-item ${
              inputIndex === 2 && "focus"
            }`}
          >
            <span className="signup-page-content-form-item-icon">
              <RiLockPasswordFill />
            </span>
            <input
              type={`${isShowPassword === true ? "text" : "password"}`}
              className="signup-page-content-form-item-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setInputIndex(2)}
              onBlur={() => setInputIndex(null)}
            />
            <span
              className="signup-page-content-form-item-pass"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword === true ? <IoMdEye /> : <BiSolidHide />}
            </span>
          </div>
          <div
            className={`signup-page-content-form-item ${
              inputIndex === 3 && "focus"
            }`}
          >
            <span className="signup-page-content-form-item-icon">
              <IoShieldCheckmark />
            </span>
            <input
              type={`${isShowConfirmedPassword === true ? "text" : "password"}`}
              className="signup-page-content-form-item-control"
              placeholder="Confirm your password"
              value={confirmedPassword}
              onChange={(e) => setConfirmedPassword(e.target.value)}
              onFocus={() => setInputIndex(3)}
              onBlur={() => setInputIndex(null)}
            />
            <span
              className="signup-page-content-form-item-pass-confirm"
              onClick={() =>
                setIsShowConfirmedPassword(!isShowConfirmedPassword)
              }
            >
              {isShowConfirmedPassword === true ? <IoMdEye /> : <BiSolidHide />}
            </span>
          </div>
          <FormControlLabel
            required
            control={<Checkbox />}
            label="I agree to the all Terms & Conditions"
            className="signup-page-content-form-item-terms"
          />

          <div className="signup-page-content-form-item">
            <Button
              className="signup-page-content-form-item-signup"
              variant="outlined"
              type="submit"
            >
              Sign Up
            </Button>
          </div>

          <div className="signup-page-content-form-item">
            <Link
              to={"/forgot-password"}
              className="signup-page-content-form-item-forgot"
            >
              Forgot password
            </Link>
          </div>

          <div className="signup-page-content-form-divide">
            <div className="signup-page-content-form-divide-border"></div>
            <span className="signup-page-content-form-divide-label">or</span>
          </div>
          <div className="signup-page-content-form-item-google">
            <img src="https://www.cdnlogo.com/logos/g/35/google-icon.svg" />
            <Button variant="outlined" color="error">
              Sign Up with Google
            </Button>
          </div>
        </form>
        <span className="signup-page-content-login">
          Already have an account?&nbsp;
          <Link to={"/login"} className="link color">
            Sign In
          </Link>
        </span>
      </div>
    </section>
  );
}
