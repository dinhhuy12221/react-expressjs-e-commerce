import Brand from "../models/brand.js";
import slugify from "slugify";

class brandController {
  createBrand = async (req, res) => {
    try {
      const { name } = req.body;

      if (!name) {
        return res.status(400).json({ message: "Brand name is required", ok: false });
      }

      const brand = await Brand.create({ name });

      res
        .status(201)
        .json({ message: "Brand created successfully", data: brand, ok: true });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message, ok: false });
    }
  };

  async updateBrand(req, res) {
    try {
      const { name } = req.body;

      if (!name) {
        return res.status(400).json({
          message: "Name is required", ok: false
        });
      }
      const brand = await Brand.findByIdAndUpdate(
        req.params.id,
        {
          name: name,
          slug: slugify(name, { lower: true, strict: true }),
        },
        { new: true }
      );

      res.status(200).json({
        message: "Brand Updated",
        data: brand, ok: true
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        error: error.message, ok: false
      });
    }
  }

  async deleteBrand(req, res) {
    try {
      await Brand.delete({ _id: req.params.id });

      res.status(200).json({
        message: "Brand Deleted!", ok: true
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message, ok: false });
    }
  }

  getBrandById = async (req, res) => {
    try {
      const brand = await Brand.findById(req.params.id);

      if (!brand) {
        return res.status(400).json({ message: "Brand is not found", ok: false });
      }
      res
        .status(200)
        .json({ message: "Brand found successfully", data: brand, ok: true });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message, ok: false });
    }
  };

  getBrands = async (req, res) => {
    try {
      const brands = await Brand.find({});
      res
        .status(201)
        .json({ message: "Brand found successfully", data: brands, ok: true });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message, ok: false });
    }
  };
}

export default new brandController();
