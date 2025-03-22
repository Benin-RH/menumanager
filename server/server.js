const express = require("express");
const cors = require("cors");
require("dotenv").config();
const routes = require("./Router.js");
const db = require("./dbConnection.js");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use("/", routes);

// Default route to check if backend is running
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

// Ensure the server starts in all environments
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
