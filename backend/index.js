import express from "express";
// import morgan from "morgan"
import cors from "cors";
import route from "./routes/index.js";
import corsOptions from "./config/corsOptions.js";
import cookieParser from "cookie-parser";
import credentials from './middlewares/credentials.js'
// import fs from "fs"
// import path from "path"
import dbConnect from "./config/dbConnect.js";
import "dotenv/config";
import verifyJWT from "./middlewares/verifyJWT.js";

dbConnect();

const app = express();

app.use(credentials);

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

// Database

// //Logger
// var accessLogStream = fs.createWriteStream(
//   path.join(__dirname, './log/access.log'),
//   {
//     flags: 'a',
//   }
// );

// app.use(morgan('combined', { stream: accessLogStream }));
route(app);

// server
app.listen(process.env.PORT, () => {
  console.log(`Server is running http://localhost:${process.env.PORT}`);
});
