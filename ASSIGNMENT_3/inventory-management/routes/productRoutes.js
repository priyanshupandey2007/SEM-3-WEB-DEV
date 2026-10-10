
const express = require("express");
const { Product } = require("../models/Product");

const productRouter = express.Router();

// 1. CREATE a product
productRouter.post("/", async (req, res, next) => {
  try {
    const product = new Product(req.body);
    await product.save();

    res.status(201).send({
      msg: "Product created successfully",
      product
    });
  } catch (error) {
    next(error);
  }
});

// 2. GET all products with filtering, sorting and pagination
productRouter.get("/", async (req, res, next) => {
  try {
    const {
      category,
      search,
      minPrice,
      maxPrice,
      sort = "name",
      page = 1,
      limit = 10
    } = req.query;

    const filter = {};

    if (category) {
      filter.category = category;
    }

    if (search) {
      filter.name = { $regex: search, $options: "i" };
    }

    if (minPrice !== undefined || maxPrice !== undefined) {
      filter.price = {};

      if (minPrice !== undefined) {
        filter.price.$gte = Number(minPrice);
      }

      if (maxPrice !== undefined) {
        filter.price.$lte = Number(maxPrice);
      }
    }

    const pageNumber = Math.max(1, Number(page) || 1);
    const pageLimit = Math.min(100, Math.max(1, Number(limit) || 10));

    const sortOptions = {
      name: { name: 1 },
      price: { price: 1 },
      quantity: { quantity: 1 },
      "-price": { price: -1 }
    };

    const products = await Product.find(filter)
      .sort(sortOptions[sort] || { name: 1 })
      .skip((pageNumber - 1) * pageLimit)
      .limit(pageLimit);

    const total = await Product.countDocuments(filter);

    res.send({
      total,
      page: pageNumber,
      limit: pageLimit,
      products
    });
  } catch (error) {
    next(error);
  }
});

// 3. GET one product by ID
productRouter.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).send({ msg: "Product not found" });
    }

    res.send(product);
  } catch (error) {
    next(error);
  }
});

// 4. UPDATE product details
productRouter.put("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).send({ msg: "Product not found" });
    }

    res.send({
      msg: "Product updated successfully",
      product
    });
  } catch (error) {
    next(error);
  }
});

// 5. RESTOCK or SELL a product
productRouter.patch("/:id/stock", async (req, res, next) => {
  try {
    const { operation, quantity } = req.body;
    const amount = Number(quantity);

    if (
      !["restock", "sale"].includes(operation) ||
      !Number.isInteger(amount) ||
      amount <= 0
    ) {
      return res.status(400).send({
        msg: "Provide operation as restock or sale and a positive whole quantity"
      });
    }

    const change = operation === "restock" ? amount : -amount;

    const product = await Product.findOneAndUpdate(
      {
        _id: req.params.id,
        ...(operation === "sale" ? { quantity: { $gte: amount } } : {})
      },
      { $inc: { quantity: change } },
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(400).send({
        msg: "Product not found or insufficient stock"
      });
    }

    res.send({
      msg: "Stock updated successfully",
      product
    });
  } catch (error) {
    next(error);
  }
});

// 6. DELETE a product
productRouter.delete("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).send({ msg: "Product not found" });
    }

    res.send({ msg: "Product deleted successfully" });
  } catch (error) {
    next(error);
  }
});

// 7. LOW-STOCK REPORT
productRouter.get("/reports/low-stock", async (req, res, next) => {
  try {
    const products = await Product.find({
      $expr: { $lte: ["$quantity", "$reorderLevel"] }
    });

    res.send(products);
  } catch (error) {
    next(error);
  }
});

// 8. CATEGORY-WISE INVENTORY SUMMARY
productRouter.get("/reports/category-summary", async (req, res, next) => {
  try {
    const summary = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          totalProducts: { $sum: 1 },
          totalQuantity: { $sum: "$quantity" },
          totalValue: {
            $sum: { $multiply: ["$price", "$quantity"] }
          }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ]);

    res.send(summary);
  } catch (error) {
    next(error);
  }
});

module.exports = { productRouter };
