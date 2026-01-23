import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { Link } from "react-router-dom";

import "./index.css";

export default function SideBar() {
  const [value, setValue] = useState([100, 60000]);
  // const [value2, setValue2] = useState(0);
  // const [brandFilters, setBrandFilters] = useState([]);
  // const [ratingsArr, setRatings] = useState([]);
  // const [totalLength, setTotalLength] = useState([]);

  return (
    <section className="sidebar">
      <div className="sidebar-filter">
        <h3>PRODUCT CATEGORIES</h3>
        <div className="sidebar-filter-scroll">
          <ul>
            <li>
              <FormControlLabel control={<Checkbox />} label="Meats & Seafood" />
            </li>
            <li>
              <FormControlLabel control={<Checkbox />} label="Bakery" />
            </li>
            <li>
              <FormControlLabel control={<Checkbox />} label="Beverages" />
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-filter">
        <h3>FILTER BY PRICE</h3>
        <RangeSlider
          value={value}
          onInput={setValue}
          min={100}
          max={60000}
          step={5}
        />
        <div className="sidebar-filter-on-price">
          <span>
            From: <strong className="text-dark">{value[0]}</strong>
          </span>
          <span className="">
            To: <strong className="text-dark">{value[1]}</strong>
          </span>
        </div>
      </div>

      <div className="sidebar-filter">
        <h3>PRODUCT STATUS</h3>

        <div className="sidebar-filter-scroll">
          <ul>
            <li>
              <FormControlLabel control={<Checkbox />} label="In Stock" />
            </li>
            <li>
              <FormControlLabel control={<Checkbox />} label="On Sale" />
            </li>
          </ul>
        </div>
      </div>

      <div className="sidebar-filter">
        <h3>BRANDS</h3>

        <div className="sidebar-filter-scroll">
          <ul>
            <li>
              <FormControlLabel control={<Checkbox />} label="Frito Lay" />
            </li>
            <li>
              <FormControlLabel control={<Checkbox />} label="Nespresso" />
            </li>
            <li>
              <FormControlLabel control={<Checkbox />} label="Frito Lay" />
            </li>
            <li>
              <FormControlLabel control={<Checkbox />} label="Nespresso" />
            </li>
            <li>
              <FormControlLabel control={<Checkbox />} label="Frito Lay" />
            </li>
            <li>
              <FormControlLabel control={<Checkbox />} label="Nespresso" />
            </li>
          </ul>
        </div>
      </div>

      <Link to="#">
        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif" />
      </Link>
    </section>
  );
}
