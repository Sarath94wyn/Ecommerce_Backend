const Product = require("../models/product");

// CREATE
exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (err) {
    next(err);
  }
};

// GET ALL + FILTER + SORT
exports.getProducts = async (req, res, next) => {
  try {
    const { name, category, minPrice, maxPrice, sort } = req.query;

    let filter = {};

    if (name) filter.name = new RegExp(name, "i");
    if (category) filter.category = category;

    if (minPrice || maxPrice) {
      filter.price = {
        ...(minPrice && { $gte: minPrice }),
        ...(maxPrice && { $lte: maxPrice }),
      };
    }

    const products = await Product.find(filter).sort(sort || "price");

    res.json(products);
  } catch (err) {
    next(err);
  }
};

// UPDATE
exports.updateProduct = async (req, res, next) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// DELETE
exports.deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json("Deleted");
  } catch (err) {
    next(err);
  }
};