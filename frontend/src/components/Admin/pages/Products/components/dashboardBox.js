import React, { useState } from "react";
import Button from "@mui/material/Button";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { IoTimerOutline } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function DashboardBox(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = ["Last Day", "Last Week"];
  const ITEM_HEIGHT = 48;

  return (
    <>
      <Button
        className="dashboardBox"
        style={{
          backgroundImage: `linear-gradient(to right, ${props.color?.[0]} , ${props.color?.[1]})`,
        }}
      >
        <div className="d-flex w-100">
          <div className="col1">
            <h4 className="text-white">Total Users</h4>
            <span className="text-white">277</span>
          </div>
          <div className="ms-auto">
            {props.icon ? (
              <span className="icon">{props.icon ? props.icon : ""}</span>
            ) : (
              ""
            )}
          </div>
        </div>
      </Button>
    </>
  );
}
