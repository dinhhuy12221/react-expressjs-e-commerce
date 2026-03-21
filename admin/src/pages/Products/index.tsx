import { useContext, useEffect, useState } from "react";
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

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Pagination from "@mui/material/Pagination";
import { AdminContext } from "../../App";

import "./index.css";
import { getProductList } from "../../api/product";
import getDiscountPrice from "../../utils/getDiscountPrice";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";

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
  const [products, setProducts] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showBy, setShowBy] = useState("");
  const [showByCat, setShowByCat] = useState("");
  const navigate = useNavigate();

  const options1 = ["Last Day", "Last Week", "Last Month", "Last Year"];
  const ITEM_HEIGHT = 48;
  const open = Boolean(anchorEl);

  const context = useContext(AdminContext);

  const handleNavigate = (slug: string) => {
    navigate(`/product/${slug}`);
  }

  useEffect(() => {
    const getData = async () => {
      const data = await getProductList();

      const result = data.map((item) => (
        <tr className="products-table-content-main-item" onClick={() => handleNavigate(item.slug)}>
          <td>#{item._id}</td>
          <td className="products-table-content-main-item-image">
            <img src={item.images[0].url} />
          </td>
          <td className="products-table-content-main-item-name">
            <span className="products-table-content-main-item-name-head">
              {item.name}
            </span>
          </td>
          <td className="products-table-content-main-item-category">
            {item.categoryId.name}
          </td>
          <td className="products-table-content-main-item-brand">{item.brandId ? item.brandId.name : ""}</td>
          <td className="products-table-content-main-item-prices">
            <del className="products-table-content-main-item-prices-old">
              ${item.price}
            </del>
            <br />
            <span className="products-table-content-main-item-prices-new">
              ${getDiscountPrice(item.price, item.discount).toFixed(2)}
            </span>
          </td>
          <td className="products-table-content-main-item-stock">{item.countInStock}</td>
          <td className="products-table-content-main-item-rating">4.9({item.numReviews})</td>
          <td className="products-table-content-main-item-order">380</td>
          <td className="products-table-content-main-item-sales">$38k</td>
          {/* <td>
            <div className="actions products-table-content-main-actions">
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
          </td> */}
        </tr>
      ));

      setProducts(result)
    };

    getData();
  }, []);

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
    <div className="products">
      <Breadcrumb
        path={[
          {
            name: "Dashboard",
            to: "/dashboard",
          },
          {
            name: "Products",
            to: `/products`,
          },
        ]}
      />
      <div className="products-table">
        <h3>Products</h3>

        <div className="products-table-filter">
          <div className="products-table-filter-number">
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
          <div className="products-table-filter-category">
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

        <div className="products-table-content">
          <table className="table table-bordered table-hover v-align products-table-content-main">
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
                {/* <th>ACTION</th> */}
              </tr>
            </thead>
            <tbody>{products.map((item) => item)}</tbody>
          </table>
          <div className="products-table-content-footer">
            <p>
              Showing <b>{products.length}</b> of <b>{products.length}</b> results
            </p>
            <div className="products-table-content-footer-pagination">
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
