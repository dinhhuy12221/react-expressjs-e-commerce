import express from "express";
import reviewController from "../controllers/reviewController";

const router = express.Router()

router.get("/product/:id", reviewController.getReviewsByProductId)
router.get("/customer/:id", reviewController.getReviewsByCustomerId)
router.post("/create", reviewController.createReview)

export default router