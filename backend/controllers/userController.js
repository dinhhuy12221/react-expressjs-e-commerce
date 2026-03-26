import User from "../models/user.js";
import cloudinary from "../config/cloudinary.js";
import path from "path";
import getSequence from "../utils/getSequence.js";
import fs from "fs/promises";

const filePath = path.resolve("./assets/default_pfp.jpg");

class userController {
  createUser = async (req, res) => {
    try {
      const counter = await getSequence("user");
      const imageResult = await cloudinary.v2.uploader.upload(filePath, {
        folder: `ecommerce/users/${counter}`,
      });

      const payload = {
        fullname: req.body?.fullname || "",
        username: req.body.username,
        image: {
          url: imageResult?.secure_url || "",
          public_id: imageResult?.public_id || "",
        },
        phone_number: req.body?.phone_number || "",
        address: req.body?.address || "",
      };
      await User.create(payload);

      res.status(201).json({
        message: "User created successfully",
        ok: true,
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
      const { image } = req.body;
      const { image_file } = req.files;
      console.log(image_file);

      let image_result = {
        url: image.url,
        public_id: image.public_id,
      };

      if (image_file) {
        const result = await cloudinary.v2.uploader.upload(image_file.path, {
          public_id: image.public_id,
          overwrite: true,
        });

        image_result = {
          url: result.secure_url,
          public_id: result.public_id,
        };
      } else if (image.public_id === undefined) {
        const result = await cloudinary.v2.uploader.upload(filePath, {
          folder: `ecommerce/users/${req.body._id}`,
        });

        image_result = {
          url: result.secure_url,
          public_id: result.public_id,
        };
      }

      console.log(image_result);

      if (image_file?.path) {
        await fs.unlink(file.path).catch(() => {});
      }

      const result = await User.findOneAndUpdate(
        {
          _id: req.body._id,
        },
        {
          fullname: req.body.fullname,
          image: {
            url: image_result?.url || "",
            public_id: image_result?.public_id || "",
          },
          phone_number: req.body?.phone_number || "",
          address: req.body?.address || "",
        }
      );

      res
        .status(200)
        .json({ message: "User updated successfully", user: result, ok: true });
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .json({ message: "Unauthorized", error: error.message, ok: true });
    }
  };
}

export default new userController();
