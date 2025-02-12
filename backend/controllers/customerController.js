import Customer from "../models/customer.js";

class customerController {
  getCustomerById = async (req, res) => {
    try {
      const user = await Customer.findOne({ _id: req.params.id });
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error);
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
      return res.status(400).json({ message: "Unauthorized" });
    } catch (error) {
      console.log(error);
    }
  };
}

export default new customerController();
