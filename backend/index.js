import express from "express";
// import morgan from "morgan"
import cors from "cors"
import route from './routes/index.js'
import corsOptions from "./config/corsOptions.js";
import cookieParser from "cookie-parser";
// import fs from "fs"
// import path from "path"
import { connect } from "./config/db/index.js";
import "dotenv/config";

connect();

const app = express();

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser())

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
    });
    