const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const db = require('./config/db')
require("dotenv/config");


app.use(cors());
app.options("/", cors());

app.use(bodyParser.json());

// Database
db.connect();

// Routes
const categoryRoutes = require("./routes/categories");
const productRoutes = require("./routes/products");

app.use(`/api/category`, categoryRoutes);
app.use(`/api/product`, productRoutes);



// server
app.listen(process.env.PORT, () => {
  console.log(`server is running http://localhost:${process.env.PORT}`);
});
