import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Connected db sucessfully");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
