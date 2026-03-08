import { useState } from "react";
// import button from "@mui/material/button";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { IoTimerOutline } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import "./index.css"

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
      <div
        className="dashboard-box"
        style={{
          backgroundImage: `linear-gradient(to right, ${props.color?.[0]} , ${props.color?.[1]})`,
        }}
      >
        <div className="dashboard-box-icon">
          {props.grow === true ? (
            <span className="dashboard-box-icon-trend">
              <FaArrowTrendUp />
            </span>
          ) : (
            <span className="dashboard-box-icon-trend">
              <FaArrowTrendDown />
            </span>
          )}
          {props.icon ? (
                <div className="dashboard-box-icon-role">{props.icon ? props.icon : ""}</div>
              ) : (
                ""
              )}
        </div>
        <div className="dashboard-box-content">
          <div className="dashboard-box-content-header">
            <h4 className="dashboard-box-content-header-label">Total Users</h4>
            <span className="dashboard-box-content-header-text">277</span>
          </div>
            
        </div>
        <div className="dashboard-box-period">
          <h6 className="dashboard-box-period-label">Last Month</h6>
          <div className="dashboard-box-period-action">
            <button className="dashboard-box-period-action-button" onClick={handleClick}>
              <HiOutlineDotsVertical />
            </button>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                paper: {
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "20ch",
                  },
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  //   selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  <IoTimerOutline className="me-2" />
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
}
