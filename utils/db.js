import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const db=await mongoose.connect(process.env.MONGO_URL);