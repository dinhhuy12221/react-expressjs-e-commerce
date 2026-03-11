import Brand from "../models/brand";

class brandController {
  createBrand = async (req, res) => {
    try {
      const payload = {
        name: req.body.name,
      };
      const brand = await Brand.create(payload);

      res
        .status(201)
        .status({ message: "Brand created successfully", data: brand });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  };

  getBrandById = async (req, res) => {
    try {
      const brand = await Brand.findOneById(req.body._id);

      res
        .status(201)
        .status({ message: "Brand found successfully", data: brand });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  };
}

export default brandController()