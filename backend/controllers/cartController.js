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

      res
        .status(200)
        .json({ message: "Add cart successfully", data: result, ok: true });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal server error",
        error: error.message,
        ok: false,
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

      res
        .status(200)
        .json({ message: "Update cart successfully", data: result, ok: true });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal server error",
        error: error.message,
        ok: false,
      });
    }
  };

  deleteCart = async (req, res) => {
    try {
      const result = await Cart.deleteOne({ _id: req.params.id });

      res
        .status(200)
        .json({ message: "Delete cart successfully", data: result, ok: true });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal server error",
        error: error.message,
        ok: false,
      });
    }
  };

  getCartByCustomer = async (req, res) => {
    try {
      const cart = await Cart.find({
        customerId: req.params.id,
      });

      res.status(200).json({
        message: "Cart found successfully",
        data: cart,
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
  };

  getProductsByCustomer = async (req, res) => {
    try {
      const products = await Cart.find({
        customerId: req.params.id,
      }).populate("productId");

      res.status(200).json({
        message: "Products found successfully",
        data: products,
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
  };
}

export default new cartController();
