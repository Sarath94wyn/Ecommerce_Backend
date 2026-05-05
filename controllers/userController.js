const User = require("../models/user");

// GET PROFILE
exports.getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    next(err);
  }
};

// UPDATE PROFILE
exports.updateProfile = async (req, res, next) => {
  try {
    const updated = await User.findByIdAndUpdate(
      req.user.id,
      req.body,
      { new: true }
    ).select("-password");

    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// DELETE USER
exports.deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.user.id);
    res.json("User deleted");
  } catch (err) {
    next(err);
  }
};

// ADMIN: GET ALL USERS
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    next(err);
  }
};