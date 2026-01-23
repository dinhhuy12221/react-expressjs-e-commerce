import React, {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import SideBar from "../../components/SideBar";
import Pagination from "@mui/material/Pagination";

import { BsGridFill } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import ProductItem from "../../components/Product/ProductItem";
import PaginationSection from "../../components/PaginationSection";
import { getProductList } from "../../api/product";

import "./index.css";

const productList = await getProductList();

let productLayoutOptions = [
  {
    index: 1,
    layout: "col-sm-6",
    used: true,
  },
  {
    index: 2,
    layout: "col-md-4",
    used: true,
  },
  {
    index: 3,
    layout: "col-lg-3",
    used: true,
  },
];
let layouts = "col-lg-3";

export default function Category() {
  const [productLayouts, setProductLayouts] = useState(productLayoutOptions);
  const [activeLayout, setActiveLayout] = useState(3);

  useMemo(() => {
    const arr = Array();
    productLayouts.forEach((item) => {
      if (item.used) {
        arr.push(item.layout);
      }
    });

    layouts = arr.join(" ");
  }, [productLayouts]);

  const handleProductLayout = (index) => {
    const productLayoutsTemp = productLayouts.map((item) => {
      if (index == item.index) {
        item = {
          ...item,
          used: true,
        };
      } else {
        item = {
          ...item,
          used: false,
        };
      }

      return item;
    });

    setProductLayouts(productLayoutsTemp);
  };

  return (
    <section className="category">
        <SideBar />
      <div className="products-view">
        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg" />

        <div className="view-options-layout">
          <div className="layout-options">
            <button
              className={`${activeLayout === 1 ? "active" : ""}`}
              onClick={() => {
                handleProductLayout(1);
                setActiveLayout(1);
              }}
            >
              <BsGridFill />
            </button>
            <button
              className={`${activeLayout === 2 ? "active" : ""}`}
              onClick={() => {
                handleProductLayout(2);
                setActiveLayout(2);
              }}
            >
              <CgMenuGridR />
            </button>
            <button
              className={`${activeLayout === 3 ? "active" : ""}`}
              onClick={() => {
                handleProductLayout(3);
                setActiveLayout(3);
              }}
            >
              <TfiLayoutGrid4Alt />
            </button>
          </div>
        </div>

        <div className="products-view">
          {productList &&
            productList.map((item, index) => (
              <div className={`product-item ${layouts}`} key={index}>
                <ProductItem product={item} />
              </div>
            ))}
        </div>

        <PaginationSection />
      </div>
    </section>
  );
}
