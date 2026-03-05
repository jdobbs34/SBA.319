import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      message: "Missing Name value",
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Date of Birth is required"],
      trim: true,
      message: "Date of Birth is required",
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      message: "Email address is required",
    },
  },
  {
    timestamps: true,
  },
);

// Indexes
userSchema.index({ name: 1 });

// Create the model
export default mongoose.model("Users", userSchema);
