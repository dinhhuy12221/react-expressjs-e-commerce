import React from "react";
import { FaSearch } from "react-icons/fa";

export default function index() {
  return (
    <div className="searchBox position-relative d-flex align-items-center">
      <FaSearch className="me-2" />
      <input type="text" placeholder="Search here..." />
    </div>
  );
}
