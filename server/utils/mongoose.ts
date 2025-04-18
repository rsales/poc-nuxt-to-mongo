import mongoose from "mongoose";

export const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  const uri = process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase";

  // console.log("🔍 Attempting to connect to MongoDB with URI:", uri);

  try {
    await mongoose.connect(uri);
    console.log("🟢 MongoDB connected");
  } catch (error) {
    console.error("🔴 MongoDB connection error:", error);
    // throw new Error("MongoDB connection failed");
  }
};