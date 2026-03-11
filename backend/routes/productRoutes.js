import express from 'express'
const router = express.Router();

import productController from '../controllers/productController.js';

router.post("/create", upload.array("image_file", 3), productController.createProduct);
router.get("/id/:id", productController.getProductById);
router.get("/:slug", productController.getProductBySlug);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);
router.get("/", productController.getProductList);

export default router;
