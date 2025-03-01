import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
      throw new Error("MongoURI is not defined");
    }
    await mongoose.connect(mongoURI);
    console.log("MongoDB Connected...");
  } catch (err) {
    if (err instanceof Error) {
      console.error(`MongoDB connection error: ${err.message}`);
    } else {
      console.error("MongoDB connection error:", err);
    }
  }
};

export default connectDB;
