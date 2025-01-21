import bcrypt from "bcrypt";
import CustomerAccount from "../../models/customerAccount.js";

class customerAccountController {
  async create(req, res) {
    try {
      const { username, password, isActive } = req.body;

      if (!username || !password) {
        return res.status(400).json({ message: "All fields are required " });
      }

      const hashedPwd = await bcrypt.hash(password, 10);

      const accountObject = new CustomerAccount({
        username: username,
        password: hashedPwd,
        isActive: isActive,
      });

      const customerAccount = await accountObject.save();
      if (customerAccount) {
        res.status(201).json({ messgae: `New user ${username} created` });
      } else {
        res.status(400).json({ message: "Invalid user data received" });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async get(req, res) {
    try {
      const { id } = req.params.id;
      const account = await CustomerAccount.find({ _id: id });

      if (account) {
        res.status(201).json(account)
      } else {
        res.status(400).json({ message: "Account is not found "})
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default new customerAccountController();
