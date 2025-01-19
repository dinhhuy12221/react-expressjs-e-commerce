import User from "../models/user.js";

class authController {
  async register(req, res) {
    try {
      const { username, password } = req.body;
      console.log(username, password);
      let user = new User({
        username,
        password,
      });

      user = await user.save();

      res.status(200).send(user);
    } catch (error) {
        console.log(error);
        
      res.send(error);
    }
  }
}

export default new authController();
