import { useState } from "react";
import "./index.css";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

function InputField({ className, type, value, onChange, disabled }) {
  const [isShowed, setIsShowed] = useState(false);
  let EyeIcon = isShowed ? IoEye : IoEyeOff;

  const props = {
    className,
    type,
    value,
    onChange,
    disabled,
  }

  const handleShow = () => {
    setIsShowed(!isShowed);
  };

  console.log(isShowed);
  

  return (
    <div className="input-field">
      {type === "password" ? (
        <>
          <input {...props}  type={isShowed ? 'text' : 'password'} />
          <span className="password-icon">
            <EyeIcon onClick={handleShow} />
          </span>
        </>
      ) : (
        <input {...props} />
      )}
    </div>
  );
}

export default InputField;
