import { log } from "console";
import Category from "../models/category.js";

class categoryController {
  // Get category list
  async getCategoryList(req, res) {
    try {
      const categoryList = await Category.find({});
      res.status(200).send(categoryList);
    } catch (error) {
      console.log(error);
      
      res
        .status(404)
        .json({
          success: false,
          message: JSON.stringify(error),
        });
    }
  }

  // Get category by slug
  async getCategoryBySlug(req, res) {
    try {
      
      const category = await Category.findOne({ slug: req.params.slug });

      res.status(200).send(category);
    } catch (error) {
      res
        .status(404)
        .json({
          success: false,
          message: JSON.stringify(error),
        });
    }
  }

  // Get category by id
  async getCategoryById(req, res) {
    try {
      const category = await Category.findOne({ _id: req.params.id });

      res.status(200).send(category);
    } catch (error) {
      res
        .status(404)
        .json({
          success: false,
          message: JSON.stringify(error),
        });
    }
  }

  // POST create category
  async createCategory(req, res) {

    try {
      let category = new Category({
        name: req.body.name,
      });
  
      category = await category.save();
      res.status(202).send(category);
      
    } catch (error) {
      res
        .status(404)
        .join({
          success: false,
          message: JSON.stringify(error),
        });
    }

  }

  // Delete category by id
  async deleteCategory(req, res) {
    try {
      const deletedCategory = await Category.delete({ _id: req.params.id });
  
      res.status(200).json({
        message: "Category Deleted!",
        success: true,
      });
      
    } catch (error) {
      res.status(404).json({
        success: false,
        message: JSON.stringify(error),
      });
    }
  }

  // Update category
  async updateCategory(req, res) {
    
    try {
      const category = await Category.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        images: req.body.images,
        color: req.body.color,
      });
  
      res.status(200).json({
        message: "Category Updated",
        success: true,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: JSON.stringify(error),
      });
    }
  }

  
}

export default new categoryController();
