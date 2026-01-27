import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

import './index.css'

export default function QuantityBox(props) {

    const [inputVal, setInputVal] = useState(props.quantity);

    const minus = () => {
        if (inputVal > 1)
            setInputVal(i => i - 1);
    }

    const plus = () => {
        setInputVal(i => i + 1);
    }
    
  return (
    <div className="quantityDrop d-flex justify-content-center">
      <button onClick={minus}>
      <FaMinus />
      </button>
      <input type="text" value={inputVal}/>
      <button onClick={plus}>
      <FaPlus />
      </button>
    </div>
  );
}
