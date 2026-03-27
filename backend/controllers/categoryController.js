import Category from "../models/category.js";
import slugify from "slugify";

class categoryController {
  // Get category list
  async getCategories(req, res) {
    try {
      const categories = await Category.find({});
      res
        .status(200)
        .json({ message: "Categories are found", data: categories, ok: true });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        message: "Internal server error",
        error: error.message,
        ok: false,
      });
    }
  }

  // Get category by slug
  async getCategoryBySlug(req, res) {
    try {
      const category = await Category.findOne({ slug: req.params.slug });

      res.status(200).send({
        message: "Category found successfully",
        data: category,
        ok: true,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        error: error.message,
        ok: false,
      });
    }
  }

  // Get category by id
  async getCategoryById(req, res) {
    try {
      const category = await Category.findOne({ _id: req.params.id });

      res.status(200).send({
        message: "Category found successfully",
        data: category,
        ok: true,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        error: error.message,
        ok: false,
      });
    }
  }

  // POST create category
  async createCategory(req, res) {
    try {
      const { name } = req.body;

      if (!name) {
        return res
          .status(400)
          .json({ message: "Category name is required", ok: false });
      }

      const category = await Category.create({ name });
      res
        .status(201)
        .json({
          message: "Category created successfully",
          data: category,
          ok: true,
        });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({
          message: "Internal server error",
          error: error.message,
          ok: false,
        });
    }
  }

  // Delete category by id
  async deleteCategory(req, res) {
    try {
      await Category.delete({ _id: req.params.id });

      res.status(200).json({
        message: "Category Deleted!",
        ok: true,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({
          message: "Internal server error",
          error: error.message,
          ok: false,
        });
    }
  }

  // Update category
  async updateCategory(req, res) {
    try {
      const { name } = req.body;

      if (!name) {
        return res.status(400).json({
          message: "Name is required",
          ok: false,
        });
      }
      const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
          name: name,
          slug: slugify(name, { lower: true, strict: true }),
        },
        { new: true }
      );

      res.status(200).json({
        message: "Category Updated",
        data: category,
        ok: true,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal server error",
        error: error.message,
        ok: false,
      });
    }
  }
}

export default new categoryController();
