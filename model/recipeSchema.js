import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      message: "Missing Name value",
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: ["Breakfast", "Lunch", "Dinner"],
      message: "Submitted an incorrect value for category",
    },
   
  },
  {
    timestamps: true,
  },
);


