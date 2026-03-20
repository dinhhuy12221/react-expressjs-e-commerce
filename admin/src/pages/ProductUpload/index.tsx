import Rating from "@mui/material/Rating";
import { useContext, useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { useParams } from "react-router-dom";
import { getProductBySlug, updateProduct } from "../../api/product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { PiCameraRotate } from "react-icons/pi";
import { getReviewByProductId } from "../../api/review";
import { getBrands } from "../../api/brand";
import { getCategories } from "../../api/category";
import { AdminContext } from "../../App";

// function handleClick(event) {
//   event.preventDefault();
//   console.info("You clicked a breadcrumb.");
// }

export default function ProductUpload() {
  const [product, setProduct] = useState<any>(null);
  const [imageFiles, setImageFiles] = useState<any>(new Array(3).fill(null));
  // const [reviews, setReviews] = useState<any>(null);
  const [brands, setBrands] = useState<any>(null);
  const [categories, setCategories] = useState<any>(null);
  // const [oneStar, setOneStar] = useState(0);
  // const [twoStar, setTwoStar] = useState(0);
  // const [threeStar, setThreeStar] = useState(0);
  // const [fourStar, setFourStar] = useState(0);
  // const [fiveStar, setFiveStar] = useState(0);
  const { setIsLoading } = useContext(AdminContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    const preview = URL.createObjectURL(file);

    setImageFiles((prev) => {
      const newImageFiles = [...prev];
      newImageFiles[index] = file;
      return newImageFiles;
    });

    setProduct((prev) => {
      const newImages = prev.images;

      newImages[index] = {
        ...newImages[index],
        url: preview,
      };

      return {
        ...prev,
        newImages,
      };
    });
  };

  const handleAsync = async () => {
    setIsLoading(true);
    // const result1 = await getProductBySlug(slug);
    const result2 = await getBrands();
    const result3 = await getCategories();
    setIsLoading(false);

    // setProduct(result1.data[0]);
    setBrands(result2.data);
    setCategories(result3.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...product,
      imageFiles,
    };
    await updateProduct(payload);
    await handleAsync();
  };

  const handleCancel = () => {
    setProduct(null);
  };

  useEffect(() => {
    handleAsync();
  }, []);

  // useEffect(() => {
  //   const getReviews = async () => {
  //     if (product !== null) {
  //       setIsLoading(true);

  //       const result = await getReviewByProductId(product?._id);
  //       setReviews(result);

  //       setOneStar(() =>
  //         result.reduce((acc, item) => acc + (item.rating === 1 ? 1 : 0), 0)
  //       );
  //       setTwoStar(() =>
  //         result.reduce((acc, item) => acc + (item.rating === 2 ? 1 : 0), 0)
  //       );
  //       setThreeStar(() =>
  //         result.reduce((acc, item) => acc + (item.rating === 3 ? 1 : 0), 0)
  //       );
  //       setFourStar(() =>
  //         result.reduce((acc, item) => acc + (item.rating === 4 ? 1 : 0), 0)
  //       );
  //       setFiveStar(() =>
  //         result.reduce((acc, item) => acc + (item.rating === 5 ? 1 : 0), 0)
  //       );
  //       setIsLoading(false);
  //     }
  //   };
  //   getReviews();
  // }, [product]);

  if (
    // product === null ||
    brands === null ||
    categories === null
  ) {
    return;
  }

  return (
    <div className="product-upload">
      <Breadcrumb
        path={[
          {
            name: "Dashboard",
            to: "/dashboard",
          },
          {
            name: "Upload",
            to: `/product/upload`,
          },
        ]}
      />

      <div className="product-upload-content">
        <h2>Product ID: #{product?._id}</h2>
        <form method="PUT" onSubmit={handleSubmit}>
          <div className="product-upload-content-images">
            {/* <h6 className="mb-4">Product Gallery</h6> */}
            {/* <Slider
                  {...productSliderOptions}
                  ref={mainImagesSlider}
                  className="product-upload-content-images-slider-main"
                >
                  {product?.images.map(item => <div className="product-upload-content-images-slider-main-item">
                    <img
                      src={item.url}
                    />
                  </div>)}
                </Slider>
                <Slider
                  {...productSliderSmallOptions}
                  ref={sideImagesSlider}
                  className="product-upload-content-images-slider-side"
                >
                  {product?.images.map(item => <div className="product-upload-content-images-slider-side-item">
                    <img
                      src={item.url}
                    />
                  </div>)}
                </Slider> */}
            {product?.images?.map((item, index) => (
              <div className="product-upload-content-images-item" key={index}>
                <img src={item.url} alt="product" width="120" />
                <PiCameraRotate />
                <input
                  type="file"
                  onChange={(e) => handleImageChange(e, index)}
                />
              </div>
            ))}
          </div>
          <div className="product-upload-content-main">
            <div className="product-upload-content-main-item">
              <h4>Name</h4>
              <input
                className="product-upload-content-main-item-input"
                type="text"
                spellCheck="false"
                placeholder="Enter the name"
                name="name"
                value={product?.name}
                onChange={handleChange}
              />
            </div>
            <div className="product-upload-content-main-item">
              <h4>Description</h4>
              <textarea
                className="product-upload-content-main-item-textarea"
                spellCheck="false"
                placeholder="Enter the description"
                name="description"
                value={product?.description}
                onChange={handleChange}
              />
            </div>
            <div className="product-upload-content-main-item">
              <h4>Category</h4>
              {/* <input
                className="product-upload-content-main-item-input"
                type="text"
                spellCheck="false"
                placeholder="Enter the category"
                value={product?.categoryId.name}
              /> */}
              <select
                className="product-upload-content-main-item-input"
                name="categoryId"
                value={product?.categoryId}
                onChange={handleChange}
              >
                <option value={""}>Choose a category ...</option>
                {categories.map((item) => (
                  <option value={item}>{item.name}</option>
                ))}
              </select>
            </div>
            <div className="product-upload-content-main-item">
              <h4>Brand</h4>
              {/* <input
                className="product-upload-content-main-item-input"
                type="text"
                placeholder="Enter the brand"
                value={product?.brandId?.name}
              /> */}
              <select
                className="product-upload-content-main-item-input"
                name="brandId"
                value={product?.brandId}
                onChange={handleChange}
              >
                <option value={""}>Choose a brand...</option>
                {brands.map((item) => (
                  <option value={item}>{item.name}</option>
                ))}
              </select>
            </div>
            <div className="product-upload-content-main-item">
              <h4>Price</h4>
              <input
                className="product-upload-content-main-item-input"
                type="number"
                spellCheck="false"
                name="price"
                value={product?.price}
                onChange={handleChange}
              />
            </div>
            <div className="product-upload-content-main-item">
              <h4>Discount (%)</h4>
              <input
                className="product-upload-content-main-item-input"
                type="number"
                spellCheck="false"
                name="discount"
                value={product?.discount}
                onChange={handleChange}
              />
            </div>
            <div className="product-upload-content-main-item">
              <h4>Stock</h4>
              <input
                className="product-upload-content-main-item-input"
                type="number"
                name="countInStock"
                value={product?.countInStock}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="product-upload-content-button">
            <button
              type="button"
              className="product-upload-content-button-cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="product-upload-content-button-save"
            >
              Save
            </button>
          </div>
        </form>

        {/* <div className="product-upload-rating">
          <h3>Rating</h3>
          <Rating
            value={product?.rating}
            precision={0.5}
            readOnly
            sx={{
              color: "#faaf00",
              "& .MuiRating-iconEmpty": {
                color: "#cccccc",
              },
            }}
          />
          <h3>Rating Analytics</h3>
          <div className="product-upload-rating-section">
            <div className="product-upload-rating-section-item">
              <div className="product-upload-rating-section-item-label">
                5 Star ({fiveStar})
              </div>
              <div
                className="product-upload-rating-section-item-progress"
                style={{ width: "100%" }}
              >
                <div
                  style={{
                    width: `${
                      fiveStar === 0
                        ? fiveStar
                        : (fiveStar * 100) / reviews?.length
                    }%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="product-upload-rating-section-item">
              <div className="product-upload-rating-section-item-label">
                4 Star ({fourStar})
              </div>
              <div
                className="product-upload-rating-section-item-progress"
                style={{ width: "100%" }}
              >
                <div
                  style={{
                    width: `${
                      fourStar === 0
                        ? fourStar
                        : (fourStar * 100) / reviews?.length
                    }%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="product-upload-rating-section-item">
              <div className="product-upload-rating-section-item-label">
                3 Star ({threeStar})
              </div>
              <div
                className="product-upload-rating-section-item-progress"
                style={{ width: "100%" }}
              >
                <div
                  style={{
                    width: `${
                      threeStar === 0
                        ? threeStar
                        : (threeStar * 100) / reviews?.length
                    }%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="product-upload-rating-section-item">
              <div className="product-upload-rating-section-item-label">
                2 Star ({twoStar})
              </div>
              <div
                className="product-upload-rating-section-item-progress"
                style={{ width: "100%" }}
              >
                <div
                  style={{
                    width: `${
                      twoStar === 0
                        ? twoStar
                        : (twoStar * 100) / reviews?.length
                    }%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="product-upload-rating-section-item">
              <div className="product-upload-rating-section-item-label">
                1 Star ({oneStar})
              </div>
              <div
                className="product-upload-rating-section-item-progress"
                style={{ width: "100%" }}
              >
                <div
                  style={{
                    width: `${
                      oneStar === 0
                        ? oneStar
                        : (oneStar * 100) / reviews?.length
                    }%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="product-upload-review">
          <h3>Reviews</h3>

          {reviews &&
            reviews.map((item) => (
              <div className="product-upload-review-item">
                <div className="product-upload-review-item-header">
                  <div>
                    <h4 className="product-upload-review-item-header-name">
                      {item.customerId.fullname}
                    </h4>
                    <span className="product-upload-review-item-header-time">
                      25 minutes ago
                    </span>
                  </div>
                  <Rating
                    name="read-only"
                    value={item.rating}
                    sx={{
                      "& .MuiRating-iconEmpty": {
                        color: "#cccccc",
                      },
                    }}
                    readOnly
                  />
                </div>
                <p className="product-upload-review-item-content">
                  {item.content}
                </p>
              </div>
            ))}
        </div> */}
      </div>
    </div>
  );
}

// import { useState } from "react";
// import { Button } from "@mui/material";

// import { MdCloudUpload } from "react-icons/md";
// import { IoCloseSharp } from "react-icons/io5";
// import { FaRegImage } from "react-icons/fa6";
// import Breadcrumb from "../../components/Breadcrumb";
// import Menu from "../../utils/Menu";
// import { getCategories } from "../../api/category";

// import "./index.css";

// const categoryList = await getCategories();

// export default function ProductUpload() {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [price, setPrice] = useState();
//   const [discount, setDiscount] = useState();
//   const [isFeatured, setIsFeatured] = useState("");
//   const [stock, setStock] = useState();
//   const [brand, setBrand] = useState("");
//   const [images, setImages] = useState<string[]>([]);

//   const handleName = (e) => {
//     setName(e.target.value);
//   };
//   const handleDescription = (value) => {
//     setDescription(value);
//   };
//   const handleCategory = (e) => {
//     setCategory(e.target.value);
//   };
//   const handlePrice = (value) => {
//     setPrice(value);
//   };
//   const handleDiscount = (value) => {
//     setDiscount(value);
//   };

//   const handleIsFeatured = (e) => {
//     setIsFeatured(e.target.value);
//   };
//   const handleStock = (value) => {
//     setStock(value);
//   };
//   const handleBrand = (value) => {
//     setBrand(value);
//   };

//   const handleImageUpload = (e) => {
//     const files = e.target.files;
//     for (let i = 0; i < files.length; i++) {
//       transformFile(files[i]);
//     }
//   };

//   const transformFile = (file) => {
//     const reader = new FileReader();

//     if (file) {
//       reader.readAsDataURL(file);
//       reader.onloadend = () => {
//         setImages((prev) => [...prev, reader.result as string]);
//       };
//     } else {
//       setImages(images);
//     }
//   };

//   const handleDeleteUploadImage = (index) => {
//     const newImages = [...images];
//     newImages.splice(index, 1);
//     setImages(newImages);
//   };

//   return (
//     <div className="right-content w-100">
//       <Breadcrumb
//         path={[
//           {
//             name: "Dashboard",
//             to: "/dashboard",
//           },
//           {
//             name: "Product Upload",
//             to: "/product/upload",
//           },
//         ]}
//       />
//       <form className="form">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="card p-3 mt-0">
//               <h5 className="mb-4">Basic Information</h5>

//               <div className="form-group">
//                 <h6>NAME</h6>
//                 <input
//                   value={name}
//                   type="text"
//                   name="name"
//                   spellCheck={false}
//                   onChange={handleName}
//                 />
//               </div>
//               <div className="form-group">
//                 <h6>DESCRIPTION</h6>
//                 <textarea
//                   value={description}
//                   rows={5}
//                   cols={10}
//                   name="description"
//                   spellCheck={false}
//                   onChange={(e) => handleDescription(e.target.value)}
//                 />
//               </div>

//               <div className="row">
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <h6>CATEGORY</h6>
//                     <Menu
//                       list={categoryList}
//                       value={category}
//                       handleEvent={handleCategory}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <h6>PRICE</h6>
//                     <input
//                       value={price}
//                       type="number"
//                       name="price"
//                       onChange={(e) => handlePrice(e.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <h6>DISCOUNT</h6>
//                     <input
//                       value={discount}
//                       type="number"
//                       name="discount"
//                       onChange={(e) => handleDiscount(e.target.value)}
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col">
//                   <div className="form-group">
//                     <h6>IS FEATURED</h6>
//                     <Menu
//                       list={["True", "False"]}
//                       value={isFeatured}
//                       handleEvent={handleIsFeatured}
//                     />
//                   </div>
//                 </div>
//                 <div className="col">
//                   <div className="form-group">
//                     <h6>PRODUCT STOCK</h6>
//                     <input
//                       value={stock}
//                       type="number"
//                       name="countInStock"
//                       onChange={(e) => handleStock(e.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <h6>BRAND</h6>
//                     <input
//                       value={brand}
//                       type="text"
//                       name="brand"
//                       spellCheck={false}
//                       onChange={(e) => handleBrand(e.target.value)}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="card p-4 mt-0">
//               <div className="imagesUploadSec">
//                 <h5 className="mb-4">Images</h5>
//                 <div className="imgUploadBox d-flex align-items-center">
//                   {images &&
//                     images?.map((image, index) => {
//                       return (
//                         <div key={index} className="uploadBox me-3">
//                           <span
//                             className="remove"
//                             onClick={() => handleDeleteUploadImage(index)}
//                           >
//                             <IoCloseSharp />
//                           </span>
//                           <div className="box">
//                             <img alt={"image"} src={image} />
//                           </div>
//                         </div>
//                       );
//                     })}
//                   <div className="uploadBox">
//                     <input
//                       className="fileChooser"
//                       type="file"
//                       name="images"
//                       multiple
//                       accept="image/png, image/jpeg"
//                       onChange={handleImageUpload}
//                     />
//                     <div className="info">
//                       <FaRegImage />
//                       <h5>Image Upload</h5>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <Button
//                 type="submit"
//                 className="btn-blue btn-lg btn-big d-flex align-items-center mt-4"
//               >
//                 <MdCloudUpload /> &nbsp;UPLOAD
//               </Button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }
