import express from "express";
import brandController from "../controllers/brandController.js";

const router = express.Router()

router.post("/create", brandController.createBrand);
router.get("/:id", brandController.getBrandById);
router.get("/", brandController.getBrands);

export default router