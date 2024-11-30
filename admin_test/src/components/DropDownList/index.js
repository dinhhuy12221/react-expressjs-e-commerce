import React, { useState } from "react";
import Button from "@mui/material/Button";
import { IoIosArrowDown } from "react-icons/io";
import { ImMenu } from "react-icons/im";

export default function DropDownList() {
  const [isOpenSidebarVal, setIsOpenSidebarVal] = useState(false);

  return (
    <div className="drop-down-list">
      <div className="selected">
        <Button
          endIcon={<IoIosArrowDown />}
          onClick={() => setIsOpenSidebarVal(!isOpenSidebarVal)}
        >
          Dashboard
        </Button>
      </div>
      <div className={`filter ${isOpenSidebarVal === true ? "open" : ""}`}>
        <ul>
          <li>
            <Button>HEHE</Button>
          </li>
          <li>
            <Button>HEHE</Button>
          </li>
          <li>
            <Button>HEHE</Button>
          </li>
          <li>
            <Button>HEHE</Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
