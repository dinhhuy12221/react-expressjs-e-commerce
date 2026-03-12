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

    getReviewsByProductId = async (req, res) => {
        try {
            const reviews = await Review.find({ productId: req.params.id })

            res.status(201).json({ message: "Reviews found", data: reviews })
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error", error: error.message })
        }
    }

    getReviewsByCustomerId = async (req, res) => {
        try {
            const reviews = await Review.find({ customerId: req.params.id })

            res.status(201).json({ message: "Reviews found", data: reviews })
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error", error: error.message })
        }
    }
}

export default new reviewController()