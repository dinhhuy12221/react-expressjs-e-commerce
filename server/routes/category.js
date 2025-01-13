const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.post("/create", categoryController.createCategory);
router.get("/:id", categoryController.getCategory);
router.put("/:id", categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory);
router.get(`/`, categoryController.getCategoryList);

module.exports = router;

//dinhhuy574-oi3dHIZ6XJ7V6h6X
