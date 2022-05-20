import mongoose from "mongoose";

export const dbConnect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/schools");
    console.log("Database connected successfully.");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
