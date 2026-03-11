import categoryRouter from "./categoryRoutes.js";
import brandRouter from "./brandRoutes.js"
import productRouter from "./productRoutes.js";
import orderRouter from "./orderRoutes.js";
import cartRouter from "./cartRoutes.js"
import authCustomerRoutes from "./auth/authCustomerRoutes.js";
import customerAccountRoutes from "./account/customerAccountRoutes.js";
import customerRoutes from "./customerRoutes.js";
import verifyRoutes from "./verifyRoutes.js";

const route = (app) => {
  app.use("/api/auth/verify", verifyRoutes);
  app.use("/api/auth/customer", authCustomerRoutes);
  app.use("/api/account/customer", customerAccountRoutes);
  app.use("/api/customer", customerRoutes);
  app.use("/api/category", categoryRouter);
  app.use("/api/brand", brandRouter);
  app.use("/api/product", productRouter);
  app.use("/api/cart", cartRouter);
  app.use("/api/order", orderRouter);
};

export default route;
