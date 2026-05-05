const Order = require("../models/order");

// CREATE ORDER
exports.createOrder = async (req, res, next) => {
  try {
    const order = await Order.create({
      ...req.body,
      userId: req.user.id,
    });
    res.json(order);
  } catch (err) {
    next(err);
  }
};

// GET USER ORDERS
exports.getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ userId: req.user.id });
    res.json(orders);
  } catch (err) {
    next(err);
  }
};

// UPDATE STATUS (ADMIN)
exports.updateOrder = async (req, res, next) => {
  try {
    const updated = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    next(err);
  }
};