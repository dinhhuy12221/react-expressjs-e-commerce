import { useContext, useEffect, useState } from "react";
import DashboardBox from "./DashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { IoBagHandleSharp } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Chart } from "react-google-charts";

import Products from "../Products";
import "./index.css";

const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

const options2 = {
  title: "Company Performance",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: {
    minValue: 0,
    baselineColor: "transparent",
    gridlineColor: "transparent",
    textPosition: "none",
  },
  series: {
    0: {
      areaOpacity: 0.1,
      color: "#fff",
    },
    1: {
      areaOpacity: 0.1,
    },
  },
  chartArea: { width: "100%", height: "100%" },
  backgroundColor: "transparent",
};

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showBy, setShowBy] = useState("");
  const [showByCat, setShowByCat] = useState("");

  const options1 = ["Last Day", "Last Week", "Last Month", "Last Year"];
  const ITEM_HEIGHT = 48;
  const open = Boolean(anchorEl);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <div className="dashboard-content-overview">
          <DashboardBox
            className="dashboard-content-overview-item"
            color={["#1da256", "#48d483"]}
            icon={<FaUserCircle />}
            grow={true}
          />
          <DashboardBox
            className="dashboard-content-overview-item"
            color={["#c012e2", "#eb64fe"]}
            icon={<RiShoppingCart2Fill />}
            grow={false}
          />
          <DashboardBox
            className="dashboard-content-overview-item"
            color={["#2c78e5", "#60aff5"]}
            icon={<IoBagHandleSharp />}
            grow={true}
          />
          <DashboardBox
            className="dashboard-content-overview-item"
            color={["#e1950e", "#f3cd29"]}
            icon={<MdOutlineStar />}
            grow={false}
          />
        </div>

        <div className="dashboard-content-graph">
          <div className="dashboard-content-graph-header">
            <h3 className="dashboard-content-graph-header-title">
              Total Sales
            </h3>
            <div className="ms-auto dashboard-content-graph-header-expand">
              <Button className="" onClick={handleClick}>
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
                    },
                  },
                }}
              >
                {options1.map((option) => (
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
          <h3 className="dashboard-content-graph-header-total">
            $3,333,333.33
          </h3>
          <p>Last Month: $3,123.45</p>
          <Chart
            className="dashboard-content-graph-main"
            chartType="AreaChart"
            width={"100%"}
            height={"100%"}
            data={data}
            options={options2}
          />
        </div>
      </div>

      <div className="dashboard-table">
        <Products />
      </div>
    </div>
  );
};

export default Dashboard;
