import express from "express";
import brandController from "../controllers/brandController.js";

const router = express.Router()

router.post("/create", brandController.createBrand);
router.delete("/:id", brandController.deleteBrand);
router.get("/:id", brandController.getBrandById);
router.put("/:id", brandController.updateBrand)
router.get("/", brandController.getBrands);

export default router