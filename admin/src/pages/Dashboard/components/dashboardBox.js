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
        {props.grow === true ? (
          <span className="chart">
            <FaArrowTrendUp />
          </span>
        ) : (
          <span className="chart">
            <FaArrowTrendDown />
          </span>
        )}
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
        <div className="d-flex align-items-center w-100 bottomEle">
          <h6 className="text-white mb-0 mt-0">Last Month</h6>
          <div className="ms-auto">
            <Button className="ms-auto toggleIcon" onClick={handleClick}>
              <HiOutlineDotsVertical />
            </Button>
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
      </Button>
    </>
  );
}
