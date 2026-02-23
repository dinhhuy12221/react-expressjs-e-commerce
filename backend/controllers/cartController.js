import Cart from "../models/cart.js";
import Product from "../models/product.js"

class cartController {
  createCart = async (req, res) => {
    try {
      const { customer_id, product_id, product_count } = req.body;
      const cart = await Cart.findOne({ customer_id, product_id });

      let result;
      if (cart) {
        cart.product_count += product_count;
        result = await cart.save();
      } else {
        result = new Cart.create({
          customer_id,
          product_id,
          product_count,
        });
      }

      return res
        .status(200)
        .json({ message: "Add cart successfully", data: result });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  };

  updateCart = async (req, res) => {
    try {
      const { customer_id, product_id, product_count } = req.body;
      const cart = await Cart.findOne({ customer_id, product_id });

      let result;
      if (cart) {
        cart.product_count = product_count;
        result = await cart.save();
      }

      return res
        .status(200)
        .json({ message: "Update cart successfully", data: product_count });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  };

  getCartByCustomer = async (req, res) => {
    try {
      const cart = await Cart.find({
        customer_id: req.params.id,
      });

      return res.status(200).json(cart);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  };

  getProductsByCustomer = async(req, res) => {
    try {
      const cart = await Cart.find({
        customer_id: req.params.id,
      });

      const product_ids = cart.map(item => { item.product_id, item.product_count })

      const products = await Product.find({})

      // const res = products.map((item) => item._id === )
      return res.status(200).json(products);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  }
}

export default new cartController();
