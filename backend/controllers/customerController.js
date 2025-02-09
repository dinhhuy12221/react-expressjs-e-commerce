import Customer from "../models/customer";

class customerController {

  getCustomerById = async(req, res) => {
    try {
      const user = await Customer.findOne({ _id: req.params.id });
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default new customerController();
