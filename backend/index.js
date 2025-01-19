import express from "express";
// import morgan from "morgan"
import cors from "cors"
import route from './routes/index.js'
import fs from "fs"
import path from "path"

import "dotenv/config";

import { connect } from "./config/db/index.js";
const app = express();

app.use(cors());
app.options("/", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


// Database

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
      connect();
    });
    