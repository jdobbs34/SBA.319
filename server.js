// Imports
import express from "express";
import dotenv from "dotenv";
import { logReq, globalErr } from "./middleware/middlewares.js";
import connectDB from "./db/conn.js"  
import recipeRoutes from "./routes/recipeRoutes.js"
import reviewRoutes from "./routes/reviewRoutes.js"
import userRoutes from "./routes/userRoutes.js"

// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
connectDB();

// Middleware
app.use(express.json());
app.use(logReq);

// Route   // If I commnt out these routes and import links above my Mongoose will connect
app.use("/api/recipe", recipeRoutes); 
app.use("/api/review", reviewRoutes);
app.use("/api/user", userRoutes);

// Global Err
app.use(globalErr);

// Listener
app.listen(PORT, () => {
  console.log(`Server Listening on PORT: ${PORT}`);
});