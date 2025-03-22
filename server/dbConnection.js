const mongoose = require("mongoose");
require("dotenv").config(); // Ensure environment variables are loaded

// Use the MongoDB URL from the environment variables
const mongoURI = process.env.MONGODB_URL || "mongodb://127.0.0.1/MenuManagement";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("MongoDB connected successfully!");
});

module.exports = db;
