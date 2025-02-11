import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import CustomerAccount from "../../models/account/customerAccount.js";

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
        return res.status(401).json({ message: "Unauthorized" });
      }

      const match = await bcrypt.compare(password, account.password);

      if (!match) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const accessToken = jwt.sign(
        {
          username: account.username,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "30m",
        }
      );

      const refreshToken = jwt.sign(
        {
          username: account.username,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
          expiresIn: "60m",
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

      res.json({ accessToken });
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
            expiresIn: "30m",
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
