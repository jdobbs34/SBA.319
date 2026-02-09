import express from "express";
import Recipe from "../models/recipeSchema.js";


const router = express.Router();

// Create
router
  .route("/")
  .post(async (req, res) => {
    let newRecipe = await Recipe.insertOne(req.body);

    res.json(newRecipe);
  })
  // Read
  .get(async (req, res) => {
    let allRecipes = await Recipe.find({});

    res.json(allRecipes);
  });

// Update
router
  .route("/:id")
  .put(async (req, res) => {
    let updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }, 
    );

    if (!updatedRecipe) return res.status(404).json({ error: "Recipe Not Found" });

    res.json(updatedRecipe);
  })

   // Delete
  .delete(async (req, res) => {
    let deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);

    if (!deletedRecipe) return res.status(404).json({ error: "Recipe Not Found" });

    res.json(deletedRecipe);
  })

  // Show One
  .get(async (req, res) => {
    let recipe = await Recipe.findById(req.params.id);

    if (!recipe) return res.status(404).json({ error: "Recipe Not Found" });

    res.json(recipe);
  });

export default router;
