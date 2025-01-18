import React, { useRef, useState } from "react";
import { Button } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { MdCloudUpload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa6";
import Breadcrumb from "../../components/Breadcrumb";
import Menu from "../../utils/Menu";
import { getCategoryList } from "../../api/category";

import "./index.css";

const categoryList = await getCategoryList();

export default function ProductUpload() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();
  const [discount, setDiscount] = useState();
  const [isFeatured, setIsFeatured] = useState("");
  const [stock, setStock] = useState();
  const [brand, setBrand] = useState("");
  const [images, setImages] = useState([]);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDescription = (value) => {
    setDescription(value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handlePrice = (value) => {
    setPrice(value);
  };
  const handleDiscount = (value) => {
    setDiscount(value);
  };

  const handleIsFeatured = (e) => {
    setIsFeatured(e.target.value);
  };
  const handleStock = (value) => {
    setStock(value);
  };
  const handleBrand = (value) => {
    setBrand(value);
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      transformFile(files[i]);
    }
  };

  const transformFile = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImages([...images, reader.result]);
      };
    } else {
      setImages(images);
    }
  };

  const handleDeleteUploadImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div className="right-content w-100">
      <Breadcrumb
        title="Product Upload"
        path={[
          {
            name: "Dashboard",
            to: "/dashboard",
          },
          {
            name: "Product Upload",
            to: "/product/upload",
          },
        ]}
      />
      <form className="form">
        <div className="row">
          <div className="col-md-12">
            <div className="card p-3 mt-0">
              <h5 className="mb-4">Basic Information</h5>

              <div className="form-group">
                <h6>NAME</h6>
                <input
                  value={name}
                  type="text"
                  name="name"
                  spellCheck={false}
                  onChange={handleName}
                />
              </div>
              <div className="form-group">
                <h6>DESCRIPTION</h6>
                <textarea
                  value={description}
                  rows={5}
                  cols={10}
                  name="description"
                  spellCheck={false}
                  onChange={(e) => handleDescription(e.target.value)}
                />
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <h6>CATEGORY</h6>
                    <Menu
                      list={categoryList}
                      value={category}
                      handleEvent={handleCategory}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <h6>PRICE</h6>
                    <input
                      value={price}
                      type="number"
                      name="price"
                      onChange={(e) => handlePrice(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <h6>DISCOUNT</h6>
                    <input
                      value={discount}
                      type="number"
                      name="discount"
                      onChange={(e) => handleDiscount(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <h6>IS FEATURED</h6>
                    <Menu
                      list={["True", "False"]}
                      value={isFeatured}
                      handleEvent={handleIsFeatured}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <h6>PRODUCT STOCK</h6>
                    <input
                      value={stock}
                      type="number"
                      name="countInStock"
                      onChange={(e) => handleStock(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <h6>BRAND</h6>
                    <input
                      value={brand}
                      type="text"
                      name="brand"
                      spellCheck={false}
                      onChange={(e) => handleBrand(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card p-4 mt-0">
              <div className="imagesUploadSec">
                <h5 className="mb-4">Images</h5>
                <div className="imgUploadBox d-flex align-items-center">
                  {images &&
                    images?.map((image, index) => {
                      return (
                        <div key={index} className="uploadBox me-3">
                          <span
                            className="remove"
                            onClick={() => handleDeleteUploadImage(index)}
                          >
                            <IoCloseSharp />
                          </span>
                          <div className="box">
                            <img alt={"image"} effect="blur" src={image} />
                          </div>
                        </div>
                      );
                    })}
                  <div className="uploadBox">
                    <input
                      className="fileChooser"
                      type="file"
                      name="images"
                      multiple
                      accept="image/png, image/jpeg"
                      onChange={handleImageUpload}
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
                <MdCloudUpload /> &nbsp;UPLOAD
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
