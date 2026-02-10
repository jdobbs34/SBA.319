import express from "express";
import Review from "../models/reviewSchema.js";
import data from "../utilities/dataReviews.js";

const router = express.Router();

router.get("/seed", async (req, res) => {
  try {
    await Review.deleteMany({});
    await Review.create(data);

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
    let newReview = await Review.insertOne(req.body);

    res.json(newReview);
  })
  // Read
  .get(async (req, res) => {
    let allReview = await Review.find({});

    res.json(allReview);
  });

// Update
router
  .route("/:id")
  .put(async (req, res) => {
    let updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    if (!updatedReview)
      return res.status(404).json({ error: "Review Not Found" });

    res.json(updatedReview);
  })

  // Delete
  .delete(async (req, res) => {
    let deletedReview = await Review.findByIdAndDelete(req.params.id);

    if (!deletedReview)
      return res.status(404).json({ error: "Review Not Found" });

    res.json(deletedReview);
  })

  // Show One
  .get(async (req, res) => {
    let review = await Review.findById(req.params.id);

    if (!review) return res.status(404).json({ error: "Review Not Found" });

    res.json(review);
  });

export default router;
