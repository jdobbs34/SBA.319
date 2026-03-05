import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/userSchema.js";
import Recipe from "../models/recipeSchema.js";
import Review from "../models/reviewSchema.js";
import userData from "./dataUsers.js";
import recipeData from "./dataRecipes.js";
import reviewData from "./dataReviews.js";

dotenv.config();

const connectionStr = process.env.MONGO_URI || "";

async function seedDatabase() {
  console.log("🚀 Starting Seed");
  try {
    await mongoose.connect(connectionStr);
    console.log("✅ Connected to DB");

    await User.deleteMany({});
    await User.create(userData);
    console.log("✅ Seeded Users");

    await Recipe.deleteMany({});
    await Recipe.create(recipeData);
    console.log("✅ Seeded Recipes");

    await Review.deleteMany({});
    await Review.create(reviewData);
    console.log("✅ Seeded Reviews");

    console.log("🎉 Successfully Seeded!");
    process.exit(1); // 0 = success
  } catch (err) {
    console.error("❌ Seed failed:", err.message);
    process.exit(1); // 1 = failure
  }
}

seedDatabase();



// NOOOOO
// dotenv.config();

// const connectionStr = process.env.MONGO_URI || "";

// async function seedDatabase() {
//   console.log("🚀 Starting Seed");
//   try {
//     await mongoose.connect(connectionStr);
//     console.log("✅ Connected to DB");

//     await Recipe.deleteMany({});
//     console.log('✅ Deleted Previous')

//     await Recipe.create(data);
//     console.log('✅ Added New Recipe')

//     console.log('🎉Successfully Seeded!')
//     process.exit(1);
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// }

// async function seedDatabase() {
//   console.log("🚀 Starting Seed");
//   try {
//     await mongoose.connect(connectionStr);
//     console.log("✅ Connected to DB");

//     await Review.deleteMany({});
//     console.log('✅ Deleted Previous')

//     await Review.create(data);
//     console.log('✅ Added New Review')

//     console.log('🎉Successfully Seeded!')
//     process.exit(1);
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// }

// async function seedDatabase() {
//   console.log("🚀 Starting Seed");
//   try {
//     await mongoose.connect(connectionStr);
//     console.log("✅ Connected to DB");

//     await User.deleteMany({});
//     console.log('✅ Deleted Previous')

//     await User.create(data);
//     console.log('✅ Added New User')

//     console.log('🎉Successfully Seeded!')
//     process.exit(1);
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// }

// seedDatabase();