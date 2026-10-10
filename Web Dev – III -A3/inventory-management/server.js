
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const { productRouter } = require("./routes/productRoutes");
const { errorHandler } = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ msg: "Inventory Management System is running" });
});

app.use("/api/products", productRouter);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error.message);
  });
