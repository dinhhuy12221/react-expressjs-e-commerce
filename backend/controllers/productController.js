import Product from "../models/product.js";
import Category from "../models/category.js";

class productController {
  // GET product list
  async getProductList(req, res) {
    try {
      const productList = await Product.find({});
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
      const product = await Product.find({ slug: req.params.slug });

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
      const imagesToUpload = req.body.images.map((image) => {
        return async () => {
          const result = await cloudinary.uploader.upload(image, {
            upload_preset: 'e-commerce',
          });
          return result;
        };
      });

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

      if (imagesToUpload) {
        const category = await Category.findById(req.body.category);
  
        if (!category) {
          return res.status(400).send("Invalid Category!");
        }
  
        let product = new Product({
          name: req.body.name,
          description: req.body.description,
          images: imagesToUpload,
          brand: req.body.brand,
          price: req.body.price,
          discount: req.body.discount,
          categoryId: req.body.categoryId,
          countInStock: req.body.countInStock,
          rating: req.body.rating,
          numReviews: req.body.numReviews,
          isFeatured: req.body.isFeatured,
        });
  
        product = await product.save();

        return res.status(200).send(product);
      }


      // if (!product) {
      //   res.status(500).join({
      //     error: error,
      //     success: false,
      //   });
      // }

    } catch (error) {
      console.log(error);

      return res.status(404).send({
        success: false,
        message: JSON.stringify(error),
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
    const product = await Product.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      description: req.body.description,
      images: req.body.images,
      brand: req.body.brand,
      price: req.body.price,
      category: req.body.category,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numReivews: req.body.numReivews,
      isFeatured: req.body.isFeatured,
    });

    if (!product) {
      res.status(404).json({
        message: "The product can not be updated!",
        status: false,
      });
    }

    return res.status(200).json({
      message: "The product is updated!",
      status: true,
    });
  }
}

export default new productController();
