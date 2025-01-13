const express = require("express");
const router = express.Router();

const productController = require('../controllers/productController');

router.post("/create", productController.createProduct);
router.get("/:id", productController.getProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);
router.get("/", productController.getProductList);

module.exports = router;
