const Product = require("../models/product");

// Simple recommendation (category-based)
exports.recommend = async (req, res, next) => {
  try {
    const { category } = req.query;

    const products = await Product.find({ category }).limit(5);

    res.json(products);
  } catch (err) {
    next(err);
  }
};