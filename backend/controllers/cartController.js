import Cart from "../models/cart.js";

class cartController {
  createCart = async (req, res) => {
    try {
      const { customerId, productId, productCount } = req.body;
      const cart = await Cart.findOne({ customerId, productId });

      let result;
      if (cart) {
        cart.productCount += productCount;
        result = await cart.save();
      } else {
        result = await Cart.create({
          customerId,
          productId,
          productCount,
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
      const { customerId, productId, productCount } = req.body;
      const cart = await Cart.findOne({ customerId, productId });

      let result;
      if (cart) {
        cart.productCount = productCount;
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

  deleteCart = async (req, res) => {
    try {
      const result = await Cart.deleteOne({ _id: req.params.id })

      return res
        .status(200)
        .json({ message: "Delete cart successfully", data: result });
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
        customerId: req.params.id,
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
        customerId: req.params.id,
      }).populate("productId");

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
