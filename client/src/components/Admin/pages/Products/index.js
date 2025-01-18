import React, { useContext, useEffect, useState } from "react";
import DashboardBox from "./components/dashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { IoPencil } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Pagination from "@mui/material/Pagination";
import { AdminContext } from "../..";


import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import { MenuItem } from "@mui/material";
import { Button } from "bootstrap";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
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

export default function Products() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showBy, setShowBy] = useState("");
  const [showByCat, setShowByCat] = useState("");

  const context = useContext(AdminContext);

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
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Product List</h5>
          <div
            className="ms-auto path"
            role="presentation"
            onClick={handleClick}
          >
            {/* <Breadcrumbs aria-label="breadcrumb">
              <StyledBreadcrumb
                href="/dashboard"
                label="Dashboard"
                icon={<HomeIcon fontSize="small" />}
                style={{
                  cursor: "pointer",
                }}
              />
              <StyledBreadcrumb
                href="#"
                label="Products"
                icon={<HomeIcon fontSize="small" />}
              />
            </Breadcrumbs> */}
            <Breadcrumb
              title="Product List"
              path={[
                {
                  name: "Dashboard",
                  to: "/dashboard",
                },
                {
                  name: "Product List",
                  to: "/product/",
                },
              ]}
            />
          </div>
        </div>
        <div className="row dashboardBoxWrapperRow dashboardBoxWrapperRowV2">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox
                color={["#1da256", "#48d483"]}
                icon={<FaUserCircle />}
              />
              <DashboardBox
                color={["#c012e2", "#eb64fe"]}
                icon={<RiShoppingCart2Fill />}
              />
              <DashboardBox
                color={["#2c78e5", "#60aff5"]}
                icon={<IoBagHandleSharp />}
              />
            </div>
          </div>
        </div>

        <div className="card row shadow border-0 p-3 mt-4 tableWrapper">
          <h3 className="hd">Best Selling Products</h3>

          <div className="row cardFilters mt-3">
            <div className="col-md-3">
              <h4>show by</h4>
              <FormControl size="small" className="w-100">
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
            <div className="col-md-3">
              <h4>Categorie by</h4>
              <FormControl size="small" className="w-100">
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

          <div className="table-responsive mt-3">
            <table className="table table-bordered table-hover v-align">
              <thead className="table-dark">
                <tr>
                  <th>UID</th>
                  <th style={{ width: "300px" }}>PRODUCT</th>
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
              <tbody>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcJNHzYZB8D673M2BdfeunxmGpEw01441aQ&s"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info ps-0">
                        <h6>Top and skirt set for Female</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$21.00</del>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center justify-content-center">
                      <Link to={"/products/details"}>
                        <Button className="secondary" color="secondary">
                          <FaEye />
                        </Button>
                      </Link>
                      <Button className="success" color="success">
                        <IoPencil />
                      </Button>
                      <Button className="error" color="error">
                        <RiDeleteBin6Fill />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcJNHzYZB8D673M2BdfeunxmGpEw01441aQ&s"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info ps-0">
                        <h6>Top and skirt set for Female</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$21.00</del>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center justify-content-center">
                      <Link to={"/products/details"}>
                        <Button className="secondary" color="secondary">
                          <FaEye />
                        </Button>
                      </Link>
                      <Button className="success" color="success">
                        <IoPencil />
                      </Button>
                      <Button className="error" color="error">
                        <RiDeleteBin6Fill />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcJNHzYZB8D673M2BdfeunxmGpEw01441aQ&s"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info ps-0">
                        <h6>Top and skirt set for Female</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$21.00</del>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center justify-content-center">
                      <Link to={"/products/details"}>
                        <Button className="secondary" color="secondary">
                          <FaEye />
                        </Button>
                      </Link>
                      <Button className="success" color="success">
                        <IoPencil />
                      </Button>
                      <Button className="error" color="error">
                        <RiDeleteBin6Fill />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcJNHzYZB8D673M2BdfeunxmGpEw01441aQ&s"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info ps-0">
                        <h6>Top and skirt set for Female</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$21.00</del>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center justify-content-center">
                      <Link to={"/products/details"}>
                        <Button className="secondary" color="secondary">
                          <FaEye />
                        </Button>
                      </Link>
                      <Button className="success" color="success">
                        <IoPencil />
                      </Button>
                      <Button className="error" color="error">
                        <RiDeleteBin6Fill />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcJNHzYZB8D673M2BdfeunxmGpEw01441aQ&s"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info ps-0">
                        <h6>Top and skirt set for Female</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$21.00</del>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center justify-content-center">
                      <Link to={"/products/details"}>
                        <Button className="secondary" color="secondary">
                          <FaEye />
                        </Button>
                      </Link>
                      <Button className="success" color="success">
                        <IoPencil />
                      </Button>
                      <Button className="error" color="error">
                        <RiDeleteBin6Fill />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcJNHzYZB8D673M2BdfeunxmGpEw01441aQ&s"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info ps-0">
                        <h6>Top and skirt set for Female</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$21.00</del>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center justify-content-center">
                      <Link to={"/products/details"}>
                        <Button className="secondary" color="secondary">
                          <FaEye />
                        </Button>
                      </Link>
                      <Button className="success" color="success">
                        <IoPencil />
                      </Button>
                      <Button className="error" color="error">
                        <RiDeleteBin6Fill />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcJNHzYZB8D673M2BdfeunxmGpEw01441aQ&s"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info ps-0">
                        <h6>Top and skirt set for Female</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: "70px" }}>
                      <del className="old">$21.00</del>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center justify-content-center">
                      <Link to={"/products/details"}>
                        <Button className="secondary" color="secondary">
                          <FaEye />
                        </Button>
                      </Link>
                      <Button className="success" color="success">
                        <IoPencil />
                      </Button>
                      <Button className="error" color="error">
                        <RiDeleteBin6Fill />
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex tableFooter">
              <p>
                Showing <b>12</b> of <b>60</b> results
              </p>
              <Pagination
                count={10}
                color="primary"
                variant="outlined"
                className="pagination"
                showFirstButton
                showLastButton
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
