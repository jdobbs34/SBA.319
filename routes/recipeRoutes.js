import express from "express";
import Recipes from "../models/recipeSchema.js";

const router = express.Router();

// Create
router
  .route("/")
  .post(async (req, res) => {
    let newRecipe = await Recipes.insertOne(req.body);

    res.json(newRecipe);
  })
  // Read
  .get(async (req, res) => {
    let allRecipes = await Recipes.find({});

    res.json(allRecipes);
  });

