import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserAccount from "../../models/account/userAccount.js";
import User from "../../models/user.js";

const REFRESH_TOKEN_EXPIRATION = "1h";
const ACCESS_TOKEN_EXPIRATION = "30m";

class authCustomerController {
  me = async (req, res) => {
    try {
      const user = await User.findOne({
        username: req.body.username,
      });

      if (!user) {
        return res
          .status(401)
          .json({ message: "Unauthorized (User not found)", ok: false });
      }

      res.status(200).json({ message: "User found", data: user, ok: true })
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error", error: error.message, ok: false })
    }
  }

  login = async (req, res) => {
    try {
      const { username, password } = req.body;
      // console.log(username, password);

      if (!username || !password) {
        return res
          .status(400)
          .json({ message: "All fields are required", ok: false });
      }

      const account = await UserAccount.findOne({
        username: username,
      });

      if (!account) {
        return res
          .status(401)
          .json({
            message: "Unauthorized (Account not found)",
            ok: false,
          });
      }

      const match = await bcrypt.compare(password, account.password);

      if (!match) {
        return res
          .status(401)
          .json({
            message: "Unauthorized (Password is incorrect)",
            ok: false,
          });
      }

      const user = await User.findOne({
        username: username,
      });

      if (!user) {
        return res
          .status(401)
          .json({ message: "Unauthorized (User not found)", ok: false });
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

      const isProd = process.env.NODE_ENV === "production";

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: isProd,
        sameSite: isProd ? "None" : "Lax",
        // maxAge: 7 * 24 * 60 * 60 * 1000,
        maxAge: 60 * 60 * 1000,
      });

      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: isProd,
        sameSite: isProd ? "None" : "Lax",
        maxAge: 60 * 60 * 1000,
        path: "/",
      });

      res.status(200).json({ message: "Login successfully", user: user, ok: true });
    } catch (error) {
      console.log(error);
      res
        .status(200)
        .json({
          message: "Internal server error",
          error: error.message,
          ok: true,
        });
    }
  };

  refresh = async (req, res) => {
    const cookies = req.cookies;

    if (!cookies?.jwt) {
      return res
        .status(401)
        .json({ message: "Unauthorized (jwt not existed)" });
    }

    const refreshToken = cookies.jwt;

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
        if (err) return res.status(403).json({ message: "Forbidden (error)" });

        const account = await UserAccount.findOne({
          username: decoded.username,
        }).exec();

        if (!account)
          return res
            .status(401)
            .json({ message: "Unauthorized (Account is not existed)" });

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
    try {
      const cookies = req.cookies;
      if (!cookies?.jwt) return res.sendStatus(204);

      //   const refreshToken = cookies.jwt;
      const account = await UserAccount.findOneAndUpdate(
        // { refreshToken: refreshToken },
        { refreshToken: "" }
      );
      if (!account) {
        res.clearCookie("jwt", {
          httpOnly: true,
          sameSite: "None",
          secure: true,
        });
      }

      res.clearCookie("jwt", {
        httpOnly: true,
        sameSite: "None",
        secure: true,
      });
      res.status(200).json({ message: "Cookies cleared successfully" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  };
}

export default new authCustomerController();
