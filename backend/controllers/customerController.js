import Customer from "../models/customer.js";

class customerController {
  getCustomer = async (req, res) => {
    try {
      console.log(req.body);
      
      const user = await Customer.findOne({ _id: req.body.id });
      return res.status(200).json(user);
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
        return res.status(200).json({ message: result });
      }
      res.status(400).json({ message: "Unauthorized" });
    } catch (error) {
      console.log(error);
    }
  };
}

export default new customerController();
