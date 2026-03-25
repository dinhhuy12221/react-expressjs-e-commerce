import express from "express";
import brandController from "../controllers/brandController.js";
import verifyJWT from "../middlewares/verifyJWT.js";

const router = express.Router()

router.post("/create", verifyJWT, brandController.createBrand);
router.delete("/:id", verifyJWT, brandController.deleteBrand);
router.put("/:id", verifyJWT, brandController.updateBrand)
router.get("/:id", brandController.getBrandById);
router.get("/", brandController.getBrands);

export default router