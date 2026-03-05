import express from "express";
import Recipe from "../models/recipeSchema.js";
import data from "../utilities/dataRecipes.js";

const router = express.Router();

router.get("/seed", async (req, res) => {
  try {
    await Recipe.deleteMany({});
    await Recipe.create(data);

    res.send("Seeded Database");
  } catch (error) {
    console.error(error.message);
    res.send("Seed failed");
  }
});

// Create
router
  .route("/")
  .post(async (req, res) => {
    let newRecipe = await Recipe.insertOne(req.body);

    res.json(newRecipe);
  })
  // Read
  .get(async (req, res) => {
    let allRecipe = await Recipe.find({});

    res.json(allRecipe);
  });

// Update
router
  .route("/:id")
  .put(async (req, res) => {
    let updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );

    if (!updatedRecipe)
      return res.status(404).json({ error: "Recipe Not Found" });

    res.json(updatedRecipe);
  })

  // Delete
  .delete(async (req, res) => {
    let deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);

    if (!deletedRecipe)
      return res.status(404).json({ error: "Recipe Not Found" });

    res.json(deletedRecipe);
  })

  // Show One
  .get(async (req, res) => {
    let recipe = await Recipe.findById(req.params.id);

    if (!recipe) return res.status(404).json({ error: "Recipe Not Found" });

    res.json(recipe);
  });

export default router;
