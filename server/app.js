const express = require("express");
const bodyParser = require("body-parser");
// const morgan = require("morgan");
const cors = require("cors");
const route = require('./routes')
const fs = require("fs");
var path = require("path");

require("dotenv/config");

const app = express();
app.use(cors());
app.options("/", cors());

app.use(bodyParser.json());

// Database
const db = require("./config/db");
db.connect();

// //Logger
// var accessLogStream = fs.createWriteStream(
//   path.join(__dirname, './log/access.log'), 
//   {
//     flags: 'a',
//   }
// );

// app.use(morgan('combined', { stream: accessLogStream }));

route(app)

// server
app.listen(process.env.PORT, () => {
  console.log(`Server is running http://localhost:${process.env.PORT}`);
});
