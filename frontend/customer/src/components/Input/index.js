import { memo, useState } from "react";
import "./index.scss";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

function Input({ className, type, value, onChange, disabled }) {
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

  
  return (
    <div className="input-field">
      {type === "password" ? (
        <>
          <input {...props} type={isShowed ? 'text' : 'password'} />
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

export default memo(Input);
