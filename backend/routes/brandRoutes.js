import express from "express";
import brandController from "../controllers/brandController";

const router = express.Router()

router.post("/create", brandController.createBrand);
router.get("/:id", brandController.getBrandById);

export default router