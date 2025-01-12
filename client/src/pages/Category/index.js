import React, { useContext, useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";

import { BsGridFill } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import ProductItem from "../../components/ProductItem";
import { MyContext } from "../../App";

import "./index.css";
import PaginationSection from "../../components/PaginationSection";

const product_views = Array(20).fill(<ProductItem />)

export default function Category() {
  const [productView, setProductView] = useState("four");
  const context = useContext(MyContext);


  useEffect(() => {
    context.setIsHeaderFooterShow(true);
  }, []);


  return (
    <section className="category">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <SideBar />
          </div>
          <div className="col-md-9 products-view">
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg"
            />

            <div className="view-options-layout">
              <div className="layout-options">
                <Button
                  onClick={() => setProductView("two")}
                >
                  <BsGridFill />
                </Button>
                <Button
                  onClick={() => setProductView("three")}
                >
                  <CgMenuGridR />
                </Button>
                <Button
                  onClick={() => setProductView("four")}
                >
                  <TfiLayoutGrid4Alt />
                </Button>
              </div>
            </div>

            <div className="products-view row">
              {
                product_views && product_views.map((product, index) => (
                  <div className="col-lg-3 col-md-4 col-sm-6 product-item" key={index}>{product}</div>
                ))
              }
            </div>

            <PaginationSection />
            
          </div>
        </div>
      </div>
    </section>
  );
}
