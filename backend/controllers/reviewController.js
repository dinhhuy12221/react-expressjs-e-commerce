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

            res.status(201).json({ message: "Review created successfully", data: review, ok: true })
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error", error: error.message, ok: false })
        }
    }

    getReviewsByProductId = async (req, res) => {
        try {
            const reviews = await Review.find({ productId: req.params.id }).populate("customerId")

            res.status(201).json({ message: "Reviews found", data: reviews, ok: true })
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error", error: error.message, ok: false })
        }
    }

    getReviewsByCustomerId = async (req, res) => {
        try {
            const reviews = await Review.find({ customerId: req.params.id }).populate("customerId")

            res.status(201).json({ message: "Reviews found", data: reviews, ok: true })
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error", error: error.message, ok: false })
        }
    }
}

export default new reviewController()