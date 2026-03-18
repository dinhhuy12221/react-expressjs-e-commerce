import express from "express";
import multer from "multer";
import productController from "../controllers/productController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post(
  "/create",
  upload.array("image_file", 3),
  productController.createProduct
);
router.get("/id/:id", productController.getProductById);
router.get("/:slug", productController.getProductBySlug);
router.put(
  "/:id",
  upload.fields([
    { name: "image_file_0", maxCount: 1 },
    { name: "image_file_1", maxCount: 1 },
    { name: "image_file_2", maxCount: 1 },
  ]),
  productController.updateProduct
);
router.delete("/:id", productController.deleteProduct);
router.get("/", productController.getProductList);

export default router;
