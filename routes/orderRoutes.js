const router = require("express").Router();
const ctrl = require("../controllers/orderController");
const { verifyToken, allowRoles } = require("../middleware/authMiddleware");

router.post("/", verifyToken, allowRoles("user", "admin"), ctrl.createOrder);
router.get("/", verifyToken, ctrl.getOrders);
router.put("/:id", verifyToken, allowRoles("admin"), ctrl.updateOrder);

module.exports = router;