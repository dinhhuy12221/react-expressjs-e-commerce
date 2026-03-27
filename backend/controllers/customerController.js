import Customer from "../models/customer.js";
import cloudinary from "../config/cloudinary.js";
import path from "path";
import getSequence from "../utils/getSequence.js";

const filePath = path.resolve("./assets/default_pfp.jpg");

class customerController {
  createCustomer = async (req, res) => {
    try {
      const counter = await getSequence("customer");
      const imageResult = await cloudinary.v2.uploader.upload(filePath, {
        folder: `ecommerce/customers/${counter}`,
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
      const customer = await Customer.create(payload);

      res.status(201).json({
        message: "Customer created successfully",
        data: customer,
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

  getCustomerById = async (req, res) => {
    try {
      const customer = await Customer.findOne({ _id: req.params.id });
      res.status(200).json({
        message: "Customer found successfully",
        data: customer,
        ok: true,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        error: error.message,
        ok: false,
      });
    }
  };

  getCustomer = async (req, res) => {
    try {
      const customer = await Customer.find({});
      res.status(200).json({
        message: "Customer found successfully",
        data: customer,
        ok: true,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        error: error.message,
        ok: false,
      });
    }
  };

  updateCustomer = async (req, res) => {
    try {
      const imageResult = await cloudinary.v2.uploader.upload(
        req.body.image_file,
        {
          public_id: req.body.image_public_id,
          overwrite: true,
        }
      );

      const result = await Customer.findOneAndUpdate(
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

      res
        .status(200)
        .json({
          message: "Customer updated successfully",
          customer: result,
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
}

export default new customerController();
