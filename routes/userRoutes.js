import express from "express";
import User from "../models/userSchema.js";
import data from "../utilities/dataUsers.js";

const router = express.Router();

router.get("/seed", async (req, res) => {
  try {
    await User.deleteMany({});
    await User.create(data);

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
    let newUser = await User.insertOne(req.body);

    res.json(newUser);
  })
  // Read
  .get(async (req, res) => {
    let allUsers = await User.find({});

    res.json(allUsers);
  });

// Update
router
  .route("/:id")
  .put(async (req, res) => {
    let updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedUser) return res.status(404).json({ error: "User Not Found" });

    res.json(updatedUser);
  })

  // Delete
  .delete(async (req, res) => {
    let deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) return res.status(404).json({ error: "User Not Found" });

    res.json(deletedUser);
  })

  // Show One
  .get(async (req, res) => {
    let user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ error: "User Not Found" });

    res.json(user);
  });

export default router;
