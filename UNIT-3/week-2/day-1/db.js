// step-1 import module
const mongoose = require("mongoose");

// step-2 Connection building
const connection = mongoose.connect("mongodb+srv://priyanshupandey2864_db_user:priyanshupandey2864_db_user@cluster0.utzggvz.mongodb.net/spiderman");

// step-3 making structure
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// step-4 making model
const userModel = mongoose.model("user", userSchema);

// step-5 export module for using in 1.js
module.exports = { connection, userModel };
