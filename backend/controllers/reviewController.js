import Review from "../models/review.js";

class reviewController {
    createReview = async (req, res) => {
        try {
            const { customerId, productId, content, rating } = req.body;
            const payload = {
                customerId,
                productId,
                content,
                rating
            }
            const review = await Review.create(payload);

            res.status(201).json({ message: "Review created successfully", data: review })
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error", error: error.message })
        }
    }

    getReviewByProductId = async (req, res) => {
        try {
            
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error", error: error.message })
        }
    }
}