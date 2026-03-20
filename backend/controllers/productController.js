import Product from "../models/product.js";
import Category from "../models/category.js";
import cloudinary from "../config/cloudinary.js";
import getSequence from "../utils/getSequence.js";
import fs from "fs/promises";

class productController {
  // GET product list
  async getProductList(req, res, next) {
    try {
      // verifyJWT(req, res, next)
      const productList = await Product.find({}).populate([
        "categoryId",
        "brandId",
      ]);
      res.status(200).send(productList);
    } catch (error) {
      res.status(404).json({
        success: false,
        message: JSON.stringify(error),
      });
    }
  }

  // GET product by slug
  async getProductBySlug(req, res) {
    try {
      const product = await Product.find({ slug: req.params.slug }).populate([
        "categoryId",
        "brandId",
      ]);

      res.status(201).json({ message: "Product is found", data: product });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  }
  // GET product by id
  async getProductById(req, res) {
    try {
      const product = await Product.find({ _id: req.params.id });

      return res.status(200).send(product);
    } catch (error) {
      return res.status(404).json({
        success: false,
        message: JSON.stringify(error),
      });
    }
  }

  // POST create product
  async createProduct(req, res) {
    try {
      const counter = await getSequence("product");
      const fileFields = ["image_file_0", "image_file_1", "image_file_2"];

      const mappedFiles = fileFields.map((field) => {
        return req.files?.[field]?.[0] || null;
      });

      const imagesToUpload = await Promise.all(
        mappedFiles.map(async (file, index) => {
          if (file) {
            const result = await cloudinary.v2.uploader.upload(file.path, {
              folder: `ecommerce/products/${counter}`,
            });
            if (file?.path) {
              await fs.unlink(file.path).catch(() => {});
            }
            return {
              url: result.secure_url,
              public_id: result.public_id,
            };
          }

          else return {
            url: "",
            public_id: "",
          };
        })
      );
      const category = await Category.findById(req.body.categoryId);

      console.log(imagesToUpload);
      

      if (!category) {
        res.status(404).json({ message: "Category is not found" });
      }

      if (imagesToUpload) {
        const payload = {
          name: req.body?.name,
          description: req.body?.description,
          images: imagesToUpload,
          price: req.body?.price,
          discount: req.body?.discount,
          brandId: req.body?.brandId,
          categoryId: req.body?.categoryId,
          countInStock: req.body?.countInStock,
          rating: req.body?.rating,
          isFeatured: req.body?.isFeatured,
        };

        const product = await Product.create(payload);

        res.status(201).json({
          message: "Product created successfully",
          data: product,
        });
      }
    } catch (error) {
      console.log(error);

      res.status(500).json({
        message: "Internal server error",
        error: error.message,
      });
    }
  }

  async updateProduct(req, res) {
    try {
      const { images } = req.body;
      const parsedImages = JSON.parse(images);
      const fileFields = ["image_file_0", "image_file_1", "image_file_2"];

      const mappedFiles = fileFields.map((field) => {
        return req.files?.[field]?.[0] || null;
      });

      // console.log(mappedFiles);

      const imagesToUpdate = await Promise.all(
        mappedFiles.map(async (file, index) => {
          // console.log("Images:", parsedImages[index].public_id);
          // console.log(file);
          // console.log(typeof parsedImages);

          if (file) {
            console.log(parsedImages[index].public_id);

            if (parsedImages[index].public_id) {
              const result = await cloudinary.v2.uploader.upload(file.path, {
                public_id: parsedImages[index]?.public_id,
                overwrite: true,
              });

              return {
                url: result.secure_url || "",
                public_id: result.public_id || "",
              };
            } else {
              const result = await cloudinary.v2.uploader.upload(file.path, {
                folder: `ecommerce/products/${req.body._id}`,
              });

              if (file?.path) {
                await fs.unlink(file.path).catch(() => {});
              }

              return {
                url: result.secure_url,
                public_id: result.public_id,
              };
            }
          } else {
            return {
              url: parsedImages[index].url || "",
              public_id: parsedImages[index].public_id || "",
            };
          }
        })
      );

      const product = await Product.findByIdAndUpdate(req.params.id, {
        name: req.body?.name || "",
        description: req.body?.description || "",
        images: imagesToUpdate,
        brand: req.body?.brand || "",
        price: req.body?.price || 0,
        discount: req.body?.discount || 0,
        category: req.body?.category || "",
        countInStock: req.body?.countInStock || 0,
        rating: req.body?.rating || 0,
        isFeatured: req.body?.isFeatured,
      });

      if (!product) {
        return res.status(404).json({
          message: "The product can not be updated!",
        });
      }
      res.status(201).json({
        message: "The product is updated!",
        data: product,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        message: "Internal server error",
        error: error.message,
      });
    }
  }
  //[DELETE] delete product
  async deleteProduct(req, res) {
    try {
      const deleteProduct = await Product.delete({ _id: req.params.id });

      res.status(200).send({
        message: "The product is deleted!",
        status: true,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: JSON.stringify(error),
      });
    }
  }
}

export default new productController();
