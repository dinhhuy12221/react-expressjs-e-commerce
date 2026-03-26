import Product from "../models/product.js";
import Category from "../models/category.js";
import cloudinary from "../config/cloudinary.js";
import getSequence from "../utils/getSequence.js";
import fs from "fs/promises";
import slugify from "slugify";
class productController {
  // GET product list
  async getProduct(req, res, next) {
    try {
      // verifyJWT(req, res, next)
      console.log(req.query);
      
      const { id, slug } = req.query;

      if (id) {
        const product = await Product.find({ _id: id });
        return res
          .status(201)
          .json({ message: "Product found", data: product });
      }
      if (slug) {
        const product = await Product.find({ slug });
        return res
          .status(201)
          .json({ message: "Product found", data: product });
      }

      const products = await Product.find({}).populate([
        "categoryId",
        "brandId",
      ]);
      return res
        .status(201)
        .json({ message: "Products found", data: products });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        message: "Internal server error",
        error: error.message,
      });
    }
  }

  // // GET product by slug
  // async getProductBySlug(req, res) {
  //   try {
  //     const product = await Product.find({ slug: req.params.slug }).populate([
  //       "categoryId",
  //       "brandId",
  //     ]);

  //     res.status(201).json({ message: "Product is found", data: product });
  //   } catch (error) {
  //     console.log(error);
  //     res
  //       .status(500)
  //       .json({ message: "Internal server error", error: error.message });
  //   }
  // }
  // // GET product by id
  // async getProductById(req, res) {
  //   try {
  //     const product = await Product.find({ _id: req.params.id });

  //     return res.status(200).send(product);
  //   } catch (error) {
  //     return res.status(404).json({
  //       success: false,
  //       message: JSON.stringify(error),
  //     });
  //   }
  // }

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
          } else
            return {
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
          } else if (parsedImages[index].deleted) {
            cloudinary.v2.uploader.destroy(
              parsedImages[index].public_id,
              function (result) {
                console.log(result);
              }
            );
            return {
              url: "",
              public_id: "",
            };
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
        brandId: req.body?.brandId || "",
        price: req.body?.price || 0,
        discount: req.body?.discount || 0,
        categoryId: req.body?.categoryId || "",
        countInStock: req.body?.countInStock || 0,
        rating: req.body?.rating || 0,
        slug: slugify(req.body?.name || "", { lower: true, strict: true }),
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
