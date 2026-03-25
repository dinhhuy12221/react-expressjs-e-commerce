import express from "express";
import reviewController from "../controllers/reviewController.js";
import verifyJWT from "../middlewares/verifyJWT.js";

const router = express.Router()

router.get("/product/:id", reviewController.getReviewsByProductId)
router.get("/customer/:id", reviewController.getReviewsByCustomerId)
router.post("/create", verifyJWT, reviewController.createReview)

export default router