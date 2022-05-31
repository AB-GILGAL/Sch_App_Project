import mongoose from "mongoose";

export const dbConnect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin12345@schoolapp.5fipwf2.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Database connected successfully.");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
