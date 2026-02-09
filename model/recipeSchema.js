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
    ingredients: {
      type: [String],
      required: [true, "Ingredients are required"],
      message: "At least one ingredient is required",
    },
    instructions: {
      type: String,
      required: [true, "Instructions are required"],
      minlength: [10, "Instructions must be at least 10 characters"],
    },
    prepTime: {
      type: Number,
      min: [0, "Prep time cannot be negative"],
      default: 0,
    },
    servings: {
      type: Number,
      min: [1, "Servings must be at least 1"],
      default: 1,
    },
  },
  {
    timestamps: true,
  },
);

// Indexes
recipeSchema.index({ name: 1 });
recipeSchema.index({ category: 1 });

// Create the model
export default mongoose.model("Recipes", recipeSchema);
