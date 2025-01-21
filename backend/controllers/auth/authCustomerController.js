import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import CustomerAccount from "../../models/customerAccount.js";

class authCustomerController {
  login = async (req, res) => {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res.status(400).json({ message: "All fields are required " });
      }

      const account = await CustomerAccount.findOne({
        username: username,
        isActive: true,
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
          UserInfo: {
            id: account._id,
            username: account.username,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "15m",
        }
      );

      const refreshToken = jwt.sign(
        {
          username: account.username,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
          expiresIn: "7d",
        }
      );

      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.json({ accessToken });
    } catch (error) {
      console.log(error);
    }
  };

  refresh = async (req, res) => {
    const cookies = req.cookies;

    if (!cookies?.jwt) {
      return res.status(401).json({ message: "Unauthorized " });
    }

    const refreshToken = cookies.jwt;

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
        if (err) return res.status(403).json({ message: "Forbidden" });

        const account = await CustomerAccount.findOne({
          username: decoded.username,
        }).exec();

        if (!account) return res.status(401).json({ message: "Unauthorized" });

        const accessToken = jwt.sign(
          {
            UserInfo: {
              id: account._id,
              username: account.username,
            },
          },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "15m",
          }
        );
      }
    );

    res.json({ accessToken });
  };

  logout = (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204);
    res.clearCookie("jwt", {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    });
    res.json({ message: "Cookie cleared" })
  };
}

export default new authCustomerController();
