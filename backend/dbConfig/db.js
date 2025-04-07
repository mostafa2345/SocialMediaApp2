import mongoose from "mongoose";

async function connectDb(MONGO_URI) {
  try {
    mongoose.connect(MONGO_URI);
    console.log("mongodb connected");
  } catch (error) {
    console.log(error.message);
  }
}
export default connectDb;
