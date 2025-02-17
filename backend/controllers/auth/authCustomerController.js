import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import CustomerAccount from "../../models/account/customerAccount.js";
import Customer from '../../models/customer.js'

const REFRESH_TOKEN_EXPIRATION = '1h'
const ACCESS_TOKEN_EXPIRATION = '30m'

class authCustomerController {
  login = async (req, res) => {
    try {
      const { username, password } = req.body;
      // console.log(username, password);
      
      if (!username || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const account = await CustomerAccount.findOne({
        username: username,
      });

      if (!account) {
        return res.status(401).json({ message: "Unauthorized (Account not found)" });
      }
      
      const match = await bcrypt.compare(password, account.password);
      
      if (!match) {
        return res.status(401).json({ message: "Unauthorized (Password is incorrect)" });
      }
      
      const customer = await Customer.findOne({
        username: username,
      })
      
      if (!customer) {
        return res.status(401).json({ message: "Unauthorized (Customer not found)" });
      }

      const accessToken = jwt.sign(
        {
          username: account.username,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: ACCESS_TOKEN_EXPIRATION,
        }
      );

      const refreshToken = jwt.sign(
        {
          username: account.username,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
          expiresIn: REFRESH_TOKEN_EXPIRATION,
        }
      );

      account.refreshToken = refreshToken;
      const result = await account.save();

      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        // maxAge: 7 * 24 * 60 * 60 * 1000,
        maxAge: 60 * 60 * 1000,
      });

      res.status(200).json({ "accessToken": accessToken, "customer": customer });
    } catch (error) {
      console.log(error);
    }
  };

  refresh = async (req, res) => {
    const cookies = req.cookies;

    if (!cookies?.jwt) {
      return res.status(401).json({ message: "Unauthorized (jwt not existed)" });
    }

    const refreshToken = cookies.jwt;

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
        if (err) return res.status(403).json({ message: "Forbidden (error)" });

        const account = await CustomerAccount.findOne({
          username: decoded.username,
        }).exec();

        if (!account) return res.status(401).json({ message: "Unauthorized (account is not existed)" });

        const accessToken = jwt.sign(
          {
            username: account.username,
          },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: ACCESS_TOKEN_EXPIRATION,
          }
        );

        res.json({ accessToken });
      }
    );
  };

  logout = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204);

    const refreshToken = cookies.jwt;
    const account = await CustomerAccount.findOneAndUpdate({ refreshToken: refreshToken }, { refreshToken: '' });
    if (!account) {
      res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
      return res.sendStatus(204);
    }
    
    res.clearCookie("jwt", {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res.json({ message: "Cookie cleared" });
  };
}

export default new authCustomerController();
