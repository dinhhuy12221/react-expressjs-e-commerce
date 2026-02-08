import User from "../models/user.js";

class userController {
  getUser = async (req, res) => {
    try {
      console.log(req.body);

      const user = await User.findOne({ _id: req.body.id });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  updateUser = async (req, res) => {
    try {
      const result = await User.findOneAndUpdate(
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
        return res.status(200).json({ user: result });
      }
      res.status(400).json({ message: "Unauthorized" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error" });
    }
  };
}

export default new userController();
