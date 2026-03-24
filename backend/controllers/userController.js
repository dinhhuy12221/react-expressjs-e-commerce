import User from "../models/user.js";
import cloudinary from "../config/cloudinary.js";
import path from "path";
import getSequence from "../utils/getSequence.js";

const filePath = path.resolve("./assets/default_pfp.jpg");

class userController {
  createUser = async (req, res) => {
    try {
      const counter = await getSequence("user")
      const imageResult = await cloudinary.v2.uploader.upload(filePath, {
        folder: `ecommerce/users/${counter}`,
      });

      const payload = {
        username: req.body.username,
        fullname: req.body.fullname,
        image: {
          url: imageResult.secure_url,
          public_id: imageResult.public_id,
        },
        phone_number: req.body.phone_number,
        address: req.body.address,
      };
      const user = await User.create(payload)

      res.status(201).json({
        message: "User created successfully",
        data: user,
      })
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal server error",
        error: error.message,
      })
    }

  };

  getUserById = async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.params.id });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  getUser = async (req, res) => {
    try {
      const user = await User.find({});
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  updateUser = async (req, res) => {
    try {
      const imageResult = await cloudinary.v2.uploader.upload(req.body.image_file, {
        public_id: req.body.image_public_id,
        overwrite: true,
      });

      const result = await User.findOneAndUpdate(
        {
          _id: req.body._id,
        },
        {
          fullname: req.body.fullname,
          image: {
            url: imageResult.secure_url,
            public_id: imageResult.public_id,
          },
          phone_number: req.body.phone_number,
          address: req.body.address,
        }
      );

      res.status(200).json({ message: "User updated successfully", user: result });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Unauthorized", error: error.message });
    }
  };
}

export default new userController();
