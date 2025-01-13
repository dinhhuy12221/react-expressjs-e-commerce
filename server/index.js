import express from "express";
import bodyParser from "body-parser"
// import morgan from "morgan"
import cors from "cors"
import route from './routes'
import fs from "fs"
import path from "path"

import "dotenv/config";

const app = express();
app.use(cors());
app.options("/", cors());

app.use(express.json());

// Database
import db from "./config/db";
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
