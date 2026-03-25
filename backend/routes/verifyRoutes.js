import express from "express";
const router = express.Router();

import verifyJWT from "../middlewares/verifyJWT.js";

router.post("/verify", verifyJWT);
router.post("/me", verifyJWT, (req, res) => {
  res.json({
    ok: true,
    user: req.user,
  });
});

export default router;
