import express from "express";
const router = express.Router();
import User from "../models/user.js";
import verifyJWT from "../middlewares/verifyJWT.js";

router.post("/verify", verifyJWT);
router.post("/me", verifyJWT, async (req, res) => {
  try {
    const user = await User.findOne({
    username: req.username,
  });

  if (!user) {
    return res
      .status(401)
      .json({ message: "Unauthorized (User not found)", ok: false });
  }

  res.status(200).json({ user, ok: true })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
      ok: false,
    });
  }
});

export default router;
