import Brand from "../models/brand.js";

class brandController {
  createBrand = async (req, res) => {
    try {
      const { name } = req.body;

      if (!name) {
        return res.status(400).json({ message: "Brand name is required" });
      }
      
      const brand = await Brand.create({ name });

      res
        .status(201)
        .json({ message: "Brand created successfully", data: brand });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  };

  getBrandById = async (req, res) => {
    try {
      const brand = await Brand.findOneById(req.params.id);

      res
        .status(201)
        .json({ message: "Brand found successfully", data: brand });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  };
}

export default new brandController();
