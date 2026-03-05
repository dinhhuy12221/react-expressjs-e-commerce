import Customer from "../models/customer.js";
import cloudinary from "../config/cloudinary.js";

class customerController {
  createCustomer = async (req, res) => {
    try {
      const imageResult = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "products",
      });
      // res.json({
      //   url: imageResult.secure_url,
      //   public_id: imageResult.public_id,
      // });

      const payload = {
        fullname: req.body.fullname,
        image: {
          url: imageResult.secure_url,
          public_id: imageResult.public_id,
        },
        phone_number: req.body.phone_number,
        address: req.body.address,
      };
      const customer = await Customer.create(payload)

      res.status(201).json({
        message: "Customer created successfully",
        data: customer,
      })
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal server error",
        error: error.message,
      })
    }

  };

  getCustomer = async (req, res) => {
    try {
      const customer = await Customer.findOne({ _id: req.params.id });
      return res.status(200).json(customer);
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  updateCustomer = async (req, res) => {
    try {
      const imageResult = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "customers",
      });
      res.json({
        url: imageResult.secure_url,
        public_id: imageResult.public_id,
      });

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

      res.status(200).json({ customer: result });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Unauthorized", error: error.message });
    }
  };
}

export default new customerController();
