import React from "react";

import { memo, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import "./index.scss";

type Props = {
  className?: string,
  id?: string,
  type?: string,
  value?: string,
  onChange?: any,
  disabled?: boolean,
}
function Input({ className, id, type, value, onChange, disabled }: Props) {
  const [isShowed, setIsShowed] = useState(false);
  let EyeIcon = isShowed ? IoEye : IoEyeOff;

  const props = {
    className,
    id,
    type,
    value,
    onChange,
    disabled
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
