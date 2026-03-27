import bcrypt from "bcrypt";
import UserAccount from "../../models/account/userAccount.js";

class customerAccountController {
  async create(req, res, next) {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res
          .status(400)
          .json({ message: "All fields are required!", ok: false });
      }

      const existedUsername = await UserAccount.findOne({ username: username });

      if (existedUsername) {
        return res
          .status(409)
          .json({ message: "Username is already existed!", ok: false });
      }

      const hashedPwd = await bcrypt.hash(password, 10);

      const accountObject = new UserAccount({
        username: username,
        password: hashedPwd,
      });

      const userAccount = await accountObject.save();
      if (userAccount) {
        // const customer = new Customer({
        //   username,
        //   fullname,
        // });

        // const response = await customer.save();

        // if(response) {
        //   return res.status(201).json({ message: `New user ${username}, fullname: ${fullname} created` });
        // }
        // res.status(201).json({ message: "Account created successfully", data: userAccount })
        next();
      } else {
        return res
          .status(400)
          .json({ message: "Invalid user data received", ok: false });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        error: error.message,
        ok: false,
      });
    }
  }

  async get(req, res) {
    try {
      const { id } = req.params.id;
      const account = await UserAccount.find({ _id: id });

      if (account) {
        res.status(201).json(account);
      } else {
        res.status(400).json({ message: "Account is not found", ok: false });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        error: error.message,
        ok: false,
      });
    }
  }
}

export default new customerAccountController();
