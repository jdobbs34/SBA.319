import mongoose from "mongoose";
import dotenv from "dotenv";
import Recipe from "../models/recipeSchema.js";
import data from "./data.js";

dotenv.config();

const connectionStr = process.env.MONGO_URI || "";

async function seedDatabase() {
  console.log("🚀 Starting Seed");
  try {
    await mongoose.connect(connectionStr);
    console.log("✅ Connected to DB");

    await Recipe.deleteMany({});
    console.log('✅ Deleted Previous')

    await Recipe.create(data);
    console.log('✅ Added New Chars')

    console.log('🎉Successfully Seeded!')
    process.exit(1);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

async function seedDatabase() {
  console.log("🚀 Starting Seed");
  try {
    await mongoose.connect(connectionStr);
    console.log("✅ Connected to DB");

    await Review.deleteMany({});
    console.log('✅ Deleted Previous')

    await Review.create(data);
    console.log('✅ Added New Chars')

    console.log('🎉Successfully Seeded!')
    process.exit(1);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

seedDatabase();