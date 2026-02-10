import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/userSchema.js";
import Recipe from "../models/recipeSchema.js";
import Review from "../models/reviewSchema.js";
import data from "./dataUsers.js";
import data from "./dataRecipes.js";
import data from './dataReviews.js';

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
    console.log('✅ Added New Recipe')

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
    console.log('✅ Added New Review')

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

    await User.deleteMany({});
    console.log('✅ Deleted Previous')

    await User.create(data);
    console.log('✅ Added New User')

    console.log('🎉Successfully Seeded!')
    process.exit(1);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

seedDatabase();