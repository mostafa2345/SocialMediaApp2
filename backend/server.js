import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import connectDb from "./dbConfig/db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  connectDb(MONGO_URI);
  console.log(`server running on ${PORT}`);
});
