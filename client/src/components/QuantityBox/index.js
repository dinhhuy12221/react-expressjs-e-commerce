import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Button from "@mui/material/Button";
import { FaMinus } from "react-icons/fa";

import './index.css'

export default function QuantityBox() {

    const [inputVal, setInputVal] = useState(1);

    const minus = () => {
        if (inputVal > 0)
            setInputVal(i => i - 1);
    }

    const plus = () => {
        setInputVal(i => i + 1);
    }
    
  return (
    <div className="quantityDrop d-flex align-items-center">
      <Button onClick={minus}>
      <FaMinus />
      </Button>
      <input type="text" value={inputVal}/>
      <Button onClick={plus}>
      <FaPlus />
      </Button>
    </div>
  );
}
