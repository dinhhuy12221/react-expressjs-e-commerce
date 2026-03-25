import jwt from "jsonwebtoken";
import User from "../models/user";

const verifyJWT = async (req, res, next) => {
  try {
    const { accessToken } = req.cookies;

    if (!accessToken) return res.status(401);


    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
      if (err) return res.status(403);
      
      const user = await User.findOne({
        username: decoded.username,
      });

      if (!user) {
        return res
          .status(401)
          .json({ message: "Unauthorized (User not found)", ok: false });
      }

      req.user = user

      next();
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
      ok: false,
    });
  }
};

export default verifyJWT;

// import jwt from "jsonwebtoken";

// const verifyJWT = (req, res, next) => {
//   try {
//     const authHeader = req?.headers["authorization"];

//     if (!authHeader) return res.sendStatus(401);
//     const accessToken = authHeader.split(" ")[1];

//     jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
//       if (err) return res.status(403).json({ success: false });
//       req.username = decoded.username;
//       // next();
//       return res.status(200).json({ message: "Success", username: req.username || "", success: true });
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Internal server error", error: error.message, success: false  })
//   }
// };

// export default verifyJWT;
