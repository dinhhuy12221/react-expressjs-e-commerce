import Order from "../models/order.js";
import Product from "../models/product.js"

class orderController {
  createOrder = async (req, res) => {
    try {
      const {
        customerId,
        products,
        location,
        delivery,
      } = req.body;

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

        const finalPrice = (price * discount * count) / 100;
        totalPrice += finalPrice;

        orderProducts.push({
          id: product._id,
          count,
          price,
          discount,
          finalPrice,
        })
      }

      const result = await Order.create({
        customerId,
        products: orderProducts,
        location,
        delivery,
        totalPrice,
      });

      return res.status(200).json({ message: "Create order successfully", data: result });
    } catch (error) {
      console.log(error);
      return res.status(404).json({
        message: "Internal server error",
      });
    }
  };

  getOrderByCustomer = async (req, res) => {
    try {
      const order = await Order.find({
        customerId: req.params.id,
      });

      return res.status(200).json(order);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "Internal server error",
      });
    }
  };
}

export default new orderController();
