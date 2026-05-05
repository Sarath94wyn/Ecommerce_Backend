const router = require("express").Router();
const ctrl = require("../controllers/userController");
const { verifyToken, allowRoles } = require("../middleware/authMiddleware");

// USER PROFILE
router.get("/me", verifyToken, ctrl.getProfile);
router.put("/me", verifyToken, ctrl.updateProfile);
router.delete("/me", verifyToken, ctrl.deleteUser);

// ADMIN ONLY
router.get("/", verifyToken, allowRoles("admin"), ctrl.getAllUsers);

module.exports = router;