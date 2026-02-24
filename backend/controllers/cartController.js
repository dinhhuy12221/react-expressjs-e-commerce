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
        .json({ message: "Update cart successfully", data: result });
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
      const products = await Cart.find({
        customer_id: req.params.id,
      }).populate("product_id");

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
