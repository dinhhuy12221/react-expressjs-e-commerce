import User from "../models/user.js";

class userController {
  async getCustomerrById(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.id });
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}
