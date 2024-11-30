import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { BsFilterLeft } from "react-icons/bs";
import Button from "@mui/material/Button";

export default function Header() {
  return (
    <div className="container-fluid">
      <div className="row header d-flex align-items-center">
        <div className="col-md-2 logo-header">
          <img src="https://cdn-icons-png.flaticon.com/512/906/906343.png" />
        </div>

        <div className="col-md-6 d-flex align-items-center search-box">
          <Button className="filter me-2">
            <BsFilterLeft />
          </Button>
          <div className="search-input">
            <FaSearch className="ms-3" />
            <input type="text" placeholder="Search here..." />
          </div>
        </div>
        <div className="col-md-4 part3 d-flex align-items-center justify-content-start">
          <div className="list-item">
            <Link to="/">
              <Button>
                <IoSunnyOutline />
              </Button>
            </Link>
            <Link to="/">
              <Button>
                <IoCartOutline />
              </Button>
            </Link>
            <Link to="/">
              <Button>
                <CiMail />
              </Button>
            </Link>
            <Link to="/">
              <Button>
                <CiBellOn />
              </Button>
            </Link>
          </div>

          <div className="user-profile">
            <Button>
              <img src="https://avatarfiles.alphacoders.com/333/333097.png" />
            </Button>
            <div className="d-flex align-items-center flex-column">
              <h5>Admin</h5>
              <span>@admin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
