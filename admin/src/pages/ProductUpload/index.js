import React, { useContext, useEffect, useState } from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import { Button, CircularProgress } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { MdCloudUpload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa6";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor = (theme.palette.mode = "#112143");
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: "rgba(255,255,255,0.7)",
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}); 

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function ProductUpload() {
  const [categoryVal, setCategoryVal] = useState("");
  const [subCatVal, setSubCatVal] = useState("");
  const [isFeaturedvalue, setIsFeaturedvalue] = useState("");
  const [productRams, setProductRams] = useState("");
  const [ratingValue, setRatingValue] = useState("");

  const handleChangeCategory = (event) => {
    setCategoryVal(event.target.value);
  };
  const handleChangeSubCategory = (event) => {
    setSubCatVal(event.target.value);
  };
  const handleChangeIsFeaturedValue = (event) => {
    setIsFeaturedvalue(event.target.value);
  };
  const handleChangeProductRams = (event) => {
    setProductRams(event.target.value);
  };

  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Product Upload</h5>
          <div className="ms-auto path" role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <StyledBreadcrumb
                href="/dashboard"
                label="Dashboard"
                icon={<HomeIcon fontSize="small" />}
                style={{
                  cursor: "pointer",
                }}
              />
              <StyledBreadcrumb
                href="/products"
                label="Products"
                style={{
                  cursor: "pointer",
                }}
              />
              <StyledBreadcrumb label="Product Upload" href="#" />
            </Breadcrumbs>
          </div>
        </div>
        <form className="form">
          <div className="row">
            <div className="col-md-12">
              <div className="card p-3 mt-0">
                <h5 className="mb-4">Basic Information</h5>

                <div className="form-group">
                  <h6>PRODUCT</h6>
                  <input type="text" name="name" />
                </div>
                <div className="form-group">
                  <h6>DESCRIPTION</h6>
                  <textarea rows={5} cols={10} name="description" />
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>CATEGORY</h6>
                      <Select
                        value={categoryVal}
                        onChange={(e) => handleChangeCategory(e)}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="w-100"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="Men" className="text-capitalize">
                          Men
                        </MenuItem>
                        <MenuItem value="Women" className="text-capitalize">
                          Women
                        </MenuItem>
                        <MenuItem value="Kids" className="text-capitalize">
                          Kids
                        </MenuItem>
                      </Select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>SUB CATEGORY</h6>
                      <Select
                        value={subCatVal}
                        onChange={(e) => handleChangeSubCategory(e)}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="w-100"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="Jeans" className="text-capitalize">
                          Jeans
                        </MenuItem>
                        <MenuItem value="Shirts" className="text-capitalize">
                          Shirts
                        </MenuItem>
                        <MenuItem value="Short" className="text-capitalize">
                          Short
                        </MenuItem>
                      </Select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>PRICE</h6>
                      <input type="text" name="oldPrice" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>OLD PRICE</h6>
                      <input type="text" name="oldPrice" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>IS FEATURED</h6>
                      <Select
                        value={isFeaturedvalue}
                        onChange={(e) => handleChangeIsFeaturedValue(e)}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="w-100"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={true}>True</MenuItem>
                        <MenuItem value={false}>False</MenuItem>
                      </Select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>PRODUCT STOCK</h6>
                      <input type="text" name="countInStock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <h6>BRAND</h6>
                      <input type="text" name="brand" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <h6>DISCOUNT</h6>
                      <input type="text" name="discount" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <h6>PRODUCT RAMS</h6>
                      <Select
                        value={productRams}
                        onChange={(e) => handleChangeProductRams(e)}
                        displayEmpty
                        className="w-100"
                        MenuProps={MenuProps}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="4GB">4GB</MenuItem>
                        <MenuItem value="8GB">8GB</MenuItem>
                        <MenuItem value="16GB">16GB</MenuItem>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <h6>RATINGS</h6>
                      <Rating
                        name="simple-controlled"
                        value={ratingValue}
                        onChange={(event, newValue) => {
                          setRatingValue(newValue);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card p-4 mt-0">
                <div className="imagesUploadSec">
                  <h5 className="mb-4">Media And Published</h5>
                  <div className="imgUploadBox d-flex align-items-center">
                    <div className="uploadBox me-3">
                      <span className="remove">
                        <IoCloseSharp />
                      </span>
                      <div className="box">
                        <LazyLoadImage
                          alt={"image"}
                          effect="blur"
                          src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                        />
                      </div>
                    </div>
                    <div className="uploadBox">
                      <input
                        className="fileChooser"
                        type="file"
                        multiple
                        name="images"
                        title=" "
                      />
                      <div className="info">
                        <FaRegImage />
                        <h5>Image Upload</h5>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="btn-blue btn-lg btn-big d-flex align-items-center mt-4"
                >
                  <MdCloudUpload /> &nbsp;PUBLISHED AND VIEW
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
