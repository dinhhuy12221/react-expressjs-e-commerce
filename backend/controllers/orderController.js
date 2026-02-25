import Order from "../models/order.js";

class orderController {
  createOrder = async (req, res) => {
    try {
      const order = new Order({
        customerId: req.body.customerId,
        productId: req.body.productId,
        productCount: req.body.productCount,
        // total: req.body.total,
      });

      const result = await order.save();

      return res.status(200).json({ message: "Add order successfully", data: result });
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
