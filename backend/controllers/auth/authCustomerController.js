import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import CustomerAccount from "../../models/account/customerAccount.js";

class authCustomerController {
  login = async (req, res) => {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res.status(400).json({ message: "All fields are required " });
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
          expiresIn: "10s",
        }
      );

      const refreshToken = jwt.sign(
        {
          username: account.username,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
          expiresIn: "15s",
        }
      );

      account.refreshToken = refreshToken;
      const result = await account.save();

      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        // maxAge: 7 * 24 * 60 * 60 * 1000,
        maxAge: 15 * 1000,
      });

      res.json({ accessToken });
    } catch (error) {
      console.log(error);
    }
  };

  refresh = async (req, res) => {
    const cookies = req.cookies;

    if (!cookies?.jwt) {
      return res.status(401).json({ message: "Unauthorized" });
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
            username: account.username,
          },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "10s",
          }
        );

        res.json({ accessToken });
      }
    );
  };

  logout = (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204);
    res.clearCookie("jwt", {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res.json({ message: "Cookie cleared" });
  };

  // handleRefreshToken = (req, res) => {
  //   try {
  //     const cookies = req.cookies;
  //     if (!cookies?.jwt) return res.sendStatus(401);
  //     const refreshToken = cookies.jwt;

  //     const account = CustomerAccount.find({ refreshToken: refreshToken });
  //     if (!account) return res.sendStatus(403);

  //     jwt.verify(
  //       refreshToken,
  //       process.env.REFRESH_TOKEN_SECRET,
  //       (err, decoded) => {
  //         if (err || account.username !== decoded.username)
  //           return res.sendStatus(403);

  //         const accessToken = jwt.sign(
  //           { username: decoded.username },
  //           process.env.ACCESS_TOKEN_SECRET,
  //           { expiresIn: "15s" }
  //         );

  //         res.json({ accessToken });
  //       }
  //     );
  //   } catch (error) {
  //     res.json(error);
  //   }
  // };
}

export default new authCustomerController();
