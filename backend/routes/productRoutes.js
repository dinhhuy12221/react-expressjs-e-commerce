import express from "express";
import multer from "multer";
import productController from "../controllers/productController.js";
import verifyJWT from "../middlewares/verifyJWT.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post(
  "/create",
  upload.fields([
    { name: "image_file_0", maxCount: 1 },
    { name: "image_file_1", maxCount: 1 },
    { name: "image_file_2", maxCount: 1 },
  ]),
  verifyJWT,
  productController.createProduct
);
router.put(
  "/:id",
  upload.fields([
    { name: "image_file_0", maxCount: 1 },
    { name: "image_file_1", maxCount: 1 },
    { name: "image_file_2", maxCount: 1 },
  ]),
  verifyJWT,
  productController.updateProduct
);
router.delete("/:id", verifyJWT, productController.deleteProduct);
router.get("/", productController.getProduct);

export default router;
