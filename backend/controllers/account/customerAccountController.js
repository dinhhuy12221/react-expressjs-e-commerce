import bcrypt from "bcrypt";
import CustomerAccount from "../../models/account/customerAccount.js";
import Customer from '../../models/customer.js'

class customerAccountController {
  async create(req, res) {
    try {
      const { fullname, username, password } = req.body;

      if (!username || !password) {
        return res.status(400).json({ message: "All fields are required!" });
      }

      const existedUsername = await CustomerAccount.find({ username });

      if (existedUsername) {
        return res.status(409).json({ message: "Username is already existed!"})
      }

      const hashedPwd = await bcrypt.hash(password, 10);

      const accountObject = new CustomerAccount({
        username: username,
        password: hashedPwd,
      });

      const customerAccount = await accountObject.save();
      if (customerAccount) {
        const customer = new Customer({
          username,
          fullname,
        });
        
        const response = await customer.save();
        
        if(response) {
          return res.status(201).json({ messgae: `New user ${username}, fullname: ${fullname} created` });
        }

      } else {
        return res.status(400).json({ message: "Invalid user data received" });
      }
    } catch (error) {
      return res.json(error);
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
      return res.json(error);
    }
  }
}

export default new customerAccountController();
