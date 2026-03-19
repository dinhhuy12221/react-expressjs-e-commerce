import Product from "../models/product.js";
import Category from "../models/category.js";
import cloudinary from "../config/cloudinary.js";
import getSequence from "../utils/getSequence.js";

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

      const imagesToUpload = await Promise.all(
        req.files.map(async (image, index) => {
          const result = await cloudinary.v2.uploader.upload(image.path, {
            folder: `ecommerce/products/${counter}`,
          });
          return {
            url: result.secure_url,
            public_id: result.public_id,
          };
        })
      );

      // const uploadStatus = await Promise.all(imagesToUpload);

      // const imgurl = uploadStatus.map((item) => {
      //   return item.secure_url;
      // });

      // if (!uploadStatus) {
      //   return res.status(500).json({
      //     error: "images cannot upload",
      //     status: false,
      //   });
      // }

      const category = await Category.findById(req.body.categoryId);

      if (!category) {
        res.status(404).json({ message: "Category is not found" });
      }

      if (imagesToUpload) {
        const payload = {
          name: req.body.name,
          description: req.body.description,
          images: imagesToUpload,
          price: req.body.price,
          discount: req.body.discount,
          brandId: req.body.brandId || null,
          categoryId: req.body.categoryId,
          countInStock: req.body.countInStock,
          rating: req.body.rating,
          numReviews: req.body.numReviews,
          isFeatured: req.body.isFeatured,
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

  async updateProduct(req, res) {
    try {
      const { images } = req.body;
      const fileFields = ["image_file_0", "image_file_1", "image_file_2"];

      const mappedFiles = fileFields.map((field) => {
        return req.files?.[field]?.[0] || null;
      });

      console.log(mappedFiles);

      const imagesToUpdate = await Promise.all(
        mappedFiles.map(async (file, index) => {
          console.log(file);

          if (file) {
            console.log(images[index].public_id);
            if (images[index].public_id === "") {
              const result = await cloudinary.v2.uploader.upload(file.path, {
                folder: `ecommerce/products/${index}`,
              });
              return {
                url: result.secure_url,
                public_id: result.public_id,
              };
            } else {
              const result = await cloudinary.v2.uploader.upload(file.path, {
                public_id: images[index]?.public_id,
                overwrite: true,
              });
              return {
                url: result.secure_url || "",
                public_id: result.public_id || "",
              };
            }
          }

          return {
            url: images[index].url || "",
            public_id: images[index].public_id || "",
          };
        })
      );

      console.log(imagesToUpdate);

      if (imagesToUpdate) {
        const product = await Product.findByIdAndUpdate(req.params.id, {
          name: req.body?.name || "",
          description: req.body?.description || "",
          images: imagesToUpdate,
          brand: req.body?.brand || "",
          price: req.body?.price || 0,
          discount: req.body?.discount || 0,
          category: req.body?.category || "",
          countInStock: req.body?.countInStock || "",
          rating: req.body?.rating || "",
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
      }

      // // 1. find product
      // const product = await Product.findById(req.params.id);

      // // 2. delete ALL old images
      // for (const img of product.images) {
      //   await cloudinary.v2.uploader.destroy(img.public_id);
      // }

      // // 3. upload new images
      // const newImages = [];
      // for (const file of req.files || []) {
      //   const result = await cloudinary.v2.uploader.upload(file.path);

      //   newImages.push({
      //     url: result.secure_url,
      //     public_id: result.public_id,
      //   });
      // }

      // // 4. update product
      // product.images = newImages;
      // Object.assign(product, req.body);

      // await product.save();
    } catch (error) {
      console.log(error);

      res.status(500).json({
        message: "Internal server error",
        error: error.message,
      });
    }
  }
}

export default new productController();
