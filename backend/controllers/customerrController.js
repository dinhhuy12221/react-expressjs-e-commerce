import Customer from "../models/customer.js";
import cloudinary from "../config/cloudinary.js";

class customerController {
  getCustomer = async (req, res) => {
    try {

      const customer = await Customer.findOne({ _id: req.params.id });
      return res.status(200).json(customer);
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  updateCustomer = async (req, res) => {
    try {
      const result = await Customer.findOneAndUpdate(
        {
          _id: req.body._id,
        },
        {
          fullname: req.body.fullname,
          avatar: req.body.avatar,
          phone_number: req.body.phone_number,
          address: req.body.address,
        }
      );

      if (result) {
        return res.status(200).json({ customer: result });
      }
      res.status(400).json({ message: "Unauthorized" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error });
    }
  };
}

export default new customerController();
