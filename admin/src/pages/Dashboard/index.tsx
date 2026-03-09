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
import { FaEye } from "react-icons/fa";
import { IoPencil } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Pagination from "@mui/material/Pagination";
import { AdminContext } from "../../App";

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

  const context = useContext(AdminContext);

  const products = new Array(10).fill(
    <tr>
      <td>#1</td>
      <td className="dashboard-table-content-main-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcJNHzYZB8D673M2BdfeunxmGpEw01441aQ&s"
          />
      </td>
      <td className="dashboard-table-content-main-name">
            <span className="dashboard-table-content-main-name-head">Top and skirt set for Female</span>
            <br />
            <span>
              Women's exclusive summer Tops and skirt set for Female Tops and
              skirt set
            </span>
      </td>
      <td className="dashboard-table-content-main-category">Women</td>
      <td className="dashboard-table-content-main-brand">Rich man</td>
      <td>
        <div className="dashboard-table-content-main-prices" style={{ width: "70px" }}>
          <del className="dashboard-table-content-main-prices-old">$21.00</del>
          <span className="dashboard-table-content-main-prices-new">$19.00</span>
        </div>
      </td>
      <td className="dashboard-table-content-main-stock">30</td>
      <td className="dashboard-table-content-main-rating">4.9(16)</td>
      <td className="dashboard-table-content-main-order">380</td>
      <td className="dashboard-table-content-main-sales">$38k</td>
      <td>
        <div className="actions dashboard-table-content-main-actions">
          <Button className="secondary" color="secondary">
            <FaEye />
          </Button>
          <Button className="success" color="success">
            <IoPencil />
          </Button>
          <Button className="error" color="error">
            <RiDeleteBin6Fill />
          </Button>
        </div>
      </td>
    </tr>
  );

  useEffect(() => {
    context.setIsHideSidebarAndHeader(false);
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    setShowBy(event.target.value);
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
        <h3>Best Selling Products</h3>

        <div className="dashboard-table-filter">
          <div className="dashboard-table-filter-number">
            <h4>Show by</h4>
            <FormControl size="small">
              <Select
                value={showBy}
                onChange={(e) => setShowBy(e.target.value)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                labelId="demo-simple-select-helper-label"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="dashboard-table-filter-category">
            <h4>Categorie by</h4>
            <FormControl size="small">
              <Select
                value={showByCat}
                onChange={(e) => setShowByCat(e.target.value)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                labelId="demo-simple-select-helper-label"
                className="w-100"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="dashboard-table-content">
          <table className="table table-bordered table-hover v-align dashboard-table-content-main">
            <thead className="table-dark">
              <tr>
                <th>UID</th>
                <th>IMAGE</th>
                <th>NAME</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th>PRICE</th>
                <th>STOCK</th>
                <th>RATING</th>
                <th>ORDER</th>
                <th>SALES</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>{products.map((item) => item)}</tbody>
          </table>
          <div className="dashboard-table-content-footer">
            <p>
              Showing <b>12</b> of <b>60</b> results
            </p>
            <div className="dashboard-table-content-footer-pagination"
>
              <Pagination
                count={10}
                color="primary"
                variant="outlined"
                showFirstButton
                showLastButton
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
