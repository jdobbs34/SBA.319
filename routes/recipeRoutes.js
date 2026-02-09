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

// Update
router
  .route("/:id")
  .put(async (req, res) => {
    let updatedRecipe = await Recipes.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }, 
    );

    res.json(updatedRecipe);
  })
   // Delete
  .delete(async (req, res) => {
    let deletedRecipe = await Recipes.findByIdAndDelete(req.params.id);

    if (!deletedRecipe) return res.status(404).json({ error: "Recipe Not Found" });

    res.json(deletedRecipe);
  })

  // Show One
  .get(async (req, res) => {
    let recipe = await Recipes.findById(req.params.id);

    if (!recipe) return res.status(404).json({ error: "Recipe Not Found" });

    res.json(recipe);
  });

export default router;
