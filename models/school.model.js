import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    noOfStd: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    reviews: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.School || mongoose.model("School", schoolSchema);
