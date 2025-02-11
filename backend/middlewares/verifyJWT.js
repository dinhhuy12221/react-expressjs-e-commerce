import jwt from "jsonwebtoken";

const verifyJWT = (req, res, next) => {
  try {
    const authHeader = req?.headers["authorization"];
    
    if (!authHeader) return res.sendStatus(401);
    const token = authHeader.split(" ")[1];

    console.log(token);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) return res.sendStatus(403);
      req.username = decoded.username;
      // next();
      return res.status(200).json({ status: 200, message: "Success", "username": req.username || "" });
    });
  } catch (error) {
    console.log(error);
  }
};

export default verifyJWT;
