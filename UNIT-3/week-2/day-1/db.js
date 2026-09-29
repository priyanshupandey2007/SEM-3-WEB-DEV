// step-1 import module
const mongoose = require("mongoose");

// step-2 Connection building
const connection = mongoose.connect("mongodb://127.0.0.1:27017/spiderman");

// step-3 making structure
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// step-4 making model
const userModel = mongoose.model("user", userSchema);

// step-5 export module for using in 1.js
module.exports = { connection, userModel };
