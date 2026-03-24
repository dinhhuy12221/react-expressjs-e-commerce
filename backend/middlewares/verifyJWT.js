import jwt from "jsonwebtoken";

const verifyJWT = (req, res, next) => {
  try {
    const authHeader = req?.headers["authorization"];
    
    if (!authHeader) return res.sendStatus(401);
    const accessToken = authHeader.split(" ")[1];


    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) return res.status(403).json({ success: false });
      req.username = decoded.username;
      // next();
      return res.status(200).json({ message: "Success", username: req.username || "", success: true });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error: error.message, success: false  })
  }
};

export default verifyJWT;
