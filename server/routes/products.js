const { Category } = require("../models/category");
const { Product } = require("../models/product");
const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;

router.get("/", async (req, res) => {
  const productList = await Product.find().populate("category");

  if (!productList) {
    res.status(500).json({ success: false });
  }
  res.send(productList);
});

router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(500).json({
      message: "The product with the given ID was not found!",
      success: false,
    });
  }

  return res.status(200).send(product);
});

router.post("/create", async (req, res) => {
  const imagesToUpload = req.body.images.map((image) => {
    return async () => {
      const result = await cloudinary.uploader.upload(image);
      return result;
    };
  });

  const uploadStatus = await Promise.all(imagesToUpload);

  const imgurl = uploadStatus.map((item) => {
    return item.secure_url;
  });

  if (!uploadStatus) {
    return res.status(500).json({
      error: "images cannot upload",
      status: false,
    });
  }

  const category = await Category.findById(req.body.category);

  if (!category) {
    return res.status(400).send("Invalid Category!");
  }

  let product = new Product({
    name: req.body.name,
    description: req.body.description,
    images: req.body.images,
    brand: req.body.brand,
    price: req.body.price,
    category: req.body.category,
    countInStock: req.body.countInStock,
    rating: req.body.rating,
    numReivews: req.body.numReivews,
    isFeatured: req.body.isFeatured,
  });

  product = await product.save();

  if (!product) {
    res.status(500).join({
      error: error,
      success: false,
    });
  }

  res.status(201).json(product);
});

router.delete("/:id", async (req, res) => {
  const deleteProduct = await Product.findByIdAndDelete(req.params.id);

  if (!deleteProduct) {
    return res.status(404).json({
      message: "Product not found!",
      status: false,
    });
  }

  res.status(200).send({
    message: "The product is deleted!",
    status: true,
  });
});

router.put("/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    description: req.body.description,
    images: req.body.images,
    brand: req.body.brand,
    price: req.body.price,
    category: req.body.category,
    countInStock: req.body.countInStock,
    rating: req.body.rating,
    numReivews: req.body.numReivews,
    isFeatured: req.body.isFeatured,
  });

  if (!product) {
    res.status(404).json({
      message: "The product can not be updated!",
      status: false,
    });
  }

  return res.status(200).json({
    message: "The product is updated!",
    status: true,
  });
});

module.exports = router;
