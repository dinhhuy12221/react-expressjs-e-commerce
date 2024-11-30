const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

app.use(cors());
app.options("/", cors());

// midleware
app.use(bodyParser.json());

// Routes
const categoryRoutes = require("./routes/categories");
const productRoutes = require("./routes/products");

app.use(`/api/category`, categoryRoutes);
app.use(`/api/product`, productRoutes);
// Database
mongoose
  .connect(process.env.CONNECTION_STRING, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

// server
app.listen(process.env.PORT, () => {
  console.log(`server is running http://localhost:${process.env.PORT}`);
});
