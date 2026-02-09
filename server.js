// Imports
import express from "express";
import dotenv from "dotenv";
import { logReq, globalErr } from "./middleware/middlewares.js";
import connectDB from "./db/conn.js";

// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
connectDB();

// Middleware
app.use(express.json());
app.use(logReq);

// Route

// Global Err
app.use(globalErr);

// Listener
app.listen(PORT, () => {
  console.log(`Server Listening on PORT: ${PORT}`);
});

