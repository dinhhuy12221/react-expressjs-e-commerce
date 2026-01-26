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
  // const [productLayouts, setProductLayouts] = useState(productLayoutOptions);
  // const [activeLayout, setActiveLayout] = useState(3);

  // useMemo(() => {
  //   const arr = Array();
  //   productLayouts.forEach((item) => {
  //     if (item.used) {
  //       arr.push(item.layout);
  //     }
  //   });

  //   layouts = arr.join(" ");
  // }, [productLayouts]);

  // const handleProductLayout = (index) => {
  //   const productLayoutsTemp = productLayouts.map((item) => {
  //     if (index == item.index) {
  //       item = {
  //         ...item,
  //         used: true,
  //       };
  //     } else {
  //       item = {
  //         ...item,
  //         used: false,
  //       };
  //     }

  //     return item;
  //   });

  //   setProductLayouts(productLayoutsTemp);
  // };
  const [layout, setLayout] = useState(4);
  let [currentLayout, setCurrentLayout] = useState('four');

  useEffect(() => {
    if (layout === 2) setCurrentLayout('two');
    else if (layout === 3) setCurrentLayout('three');
    else if (layout === 4) setCurrentLayout('four');
  }, [layout])

  return (
    <section className="category">
      <SideBar />
      <section className="category-product-section">
        <div className="thumbnail">
          <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg" />
        </div>
        <div className="category-product-view-selector">
          <button
            className={`btn btn--outlined ${
              layout === 2 && "btn--primary"
            }`}
            onClick={() => setLayout(2)}
          >
            <BsGridFill />
          </button>
          <button
            className={`btn btn--outlined ${
              layout === 3 && "btn--primary"
            }`}
            onClick={() => setLayout(3)}
          >
            <CgMenuGridR />
          </button>
          <button
            className={`btn btn--outlined ${
              layout === 4 && "btn--primary"
            }`}
            onClick={() => setLayout(4)}
          >
            <TfiLayoutGrid4Alt />
          </button>
        </div>

        <div className={`category-product-main ${currentLayout}`}>
          {productList &&
            productList.map((item, index) => (
                <ProductItem product={item} key={index} />
            ))}
        </div>

        <PaginationSection />
      </section>
    </section>
  );
}
