import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";

import "./index.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CountrySelector() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [countryList, setCountryList] = useState([]);

  const context = useContext(MyContext);

  const selectCountry = (index, country) => {
    setSelectedOption(index);
    setIsModalOpen(false);
    context.setSelectedCountry(country);
  };

  useEffect(() => {
    setCountryList(context.countryList);
  }, []);

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    if (keyword !== "") {
      const list = countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
      setCountryList(list);
    } else {
      setCountryList(context.countryList);
    }
  };

  return (
    <>
      <button className="btn country-selector" onClick={() => setIsModalOpen(true)}>
        <div className="country-info">
          <span className="country-label">Your Country</span>
          <span className="country-name">
            {context.selectedCountry
              ? context.selectedCountry.length > 15
                ? context.selectedCountry.substring(0, 15) + "..."
                : context.selectedCountry
              : "Select a location"}
          </span>
        </div>
        <FaAngleDown />
      </button>
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        TransitionComponent={Transition}
      >
        <div className="country-modal">
          <h5 className="country-label">Choose your Delivery Country</h5>
          <p className="country-description">Enter your address and we will specify the offer for your area.</p>
          <button
            className="btn close-button"
            onClick={() => setIsModalOpen(false)}
          >
            <IoClose />
          </button>
          <div className="country-container">
            <div className="country-search">
              <CiSearch />
              <input
                type="text"
                placeholder="Search your area..."
                onChange={filterList}
              />
            </div>

            <ul className="country-list">
              {countryList.length !== 0 &&
                countryList?.map((item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => selectCountry(index, item.country)}
                      className={`${selectedOption === index ? "active" : ""}`}
                    >
                      {item.country}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </Dialog>
    </>
  );
}
