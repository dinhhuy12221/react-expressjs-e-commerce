import User from "../models/user.js";

class authController {
  async register(req, res) {
    try {
      const { username, password } = req.body;
      let user = new User({
        username,
        password,
      });

      user = await user.save();

      res.status(200).send(user);
    } catch (error) {
      res.status(409).send(error);
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      
      let user = await User.findOne({ username: username, password: password });
      console.log(user);
      
      if (user) {
        return res.status(200).send(user);
      }
      return res.status(400).send()
    } catch (error) {
      // console.log(error);
      return res.status(400).send(error);
      
    }
  }
}

export default new authController();
