import categoryRouter from "./categoryRoutes.js";
import productRouter from "./productRoutes.js";
import orderRouter from "./orderRoutes.js";
import authCustomerRoutes from "./auth/authCustomerRoutes.js";
import customerAccountRoutes from "./account/customerAccountRoutes.js";
import verifyJWT from "../middlewares/verifyJWT.js";
const route = (app) => {
  app.use("/api/account/customer", customerAccountRoutes);
  app.use("/api/auth/customer", authCustomerRoutes);
  app.use("/api/category", categoryRouter);
  app.use("/api/product", productRouter);
  app.use("/api/orders", orderRouter);
};

export default route;
