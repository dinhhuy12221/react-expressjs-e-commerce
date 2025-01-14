import Category from "../models/category.js";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.cloudinary_Config_Cloud_Name,
  api_key: process.env.cloudinary_Config_api_key,
  api_secret: process.env.cloudinary_Config_api_secret,
});

class categoryController {
  // Get category list
  async getCategoryList(req, res) {
    try {
      const categoryList = await Category.find();
      res.status(200).send(categoryList);
    } catch (error) {
      res
        .status(404)
        .json({
          success: false,
          message: error,
        });
    }
  }

  // Get category by slug
  async getCategory(req, res) {
    try {
      
      const category = await Category.findOne({ slug: req.params.slug });

      res.status(200).send(category);
    } catch (error) {
      res
        .status(404)
        .json({
          success: false,
          message: error,
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
          message: error,
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
        message: error,
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
        message: error,
      });
    }
  }

  
}

export default new categoryController();
