import Order from "../models/order.js";
import Product from "../models/product.js";
import Cart from "../models/cart.js";

class orderController {
  createOrder = async (req, res) => {
    try {
      const { customerId, products, location, delivery } = req.body;

      if (products.length === 0) {
        return res.status(404).json({ message: "There is no selected product" })
      }

      let orderProducts = [];
      let totalPrice = 0;

      for (let item of products) {
        const product = await Product.findById(item.id);

        if (!product) {
          return res.status(404).json({ message: "Product not found" });
        }

        const price = product.price;
        const discount = product.discount;
        const count = item.count;

        const finalPrice = (price * (100 - discount) * count) / 100;
        totalPrice += finalPrice;

        orderProducts.push({
          id: product._id,
          count,
          price,
          discount,
          finalPrice,
        });

        await Product.findByIdAndUpdate(
          product._id,
          { $inc: { countInStock: -count } },
          { new: true }
        );

        await Cart.deleteOne({ customerId, productId: product._id });
      }

      const orderedAt = new Date();
      const deliveredAt = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);

      const result = await Order.create({
        customerId,
        products: orderProducts,
        location,
        delivery,
        orderedAt,
        deliveredAt,
        totalPrice,
      });

      return res
        .status(200)
        .json({ message: "Create order successfully", data: result });
    } catch (error) {
      console.log(error);
      return res.status(404).json({
        message: "Internal server error",
      });
    }
  };

  getOrderByCustomer = async (req, res) => {
    try {
      const result = await Order.find({
        customerId: req.params.id,
      }).populate("products.id");

      return res
        .status(200)
        .json({ message: "Get order successfully", data: result });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  };

  getOrders = async (req, res) => {
    try {
      const result = await Order.find({}).populate("products.id");

      return res
        .status(200)
        .json({ message: "Get order successfully", data: result });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  };
}

export default new orderController();
