// Imports
import express from "express";
import { logReq, globalErr } from "./middleware/middlewares.js"

// Setups
const app = express();
const PORT = process.env.PORT || 3001

// Middleware
app.use(express.json());
app.use(logReq);

// Route

// Global Err
app.use(globalErr)

// Listener
app.listen(PORT, () => {
  console.log(`Server Listening on PORT: ${PORT}`);
});