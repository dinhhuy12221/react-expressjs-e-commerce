import express from "express";
const router = express.Router();
import categoryController from "../controllers/categoryController.js";
import verifyJWT from "../middlewares/verifyJWT.js";

router.post("/create", verifyJWT, categoryController.createCategory);
router.get("/:id", verifyJWT, categoryController.getCategoryById);
router.put("/:id", verifyJWT, categoryController.updateCategory);
router.delete("/:id", verifyJWT, categoryController.deleteCategory);
router.get("/:slug", categoryController.getCategoryBySlug);
router.get("/", categoryController.getCategories);

export default router;
