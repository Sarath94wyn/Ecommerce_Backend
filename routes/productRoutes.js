const router = require("express").Router();
const ctrl = require("../controllers/productController");
const { verifyToken, allowRoles } = require("../middleware/authMiddleware");

router.post("/", verifyToken, allowRoles("admin"), ctrl.createProduct);
router.get("/", ctrl.getProducts);
router.put("/:id", verifyToken, allowRoles("admin"), ctrl.updateProduct);
router.delete("/:id", verifyToken, allowRoles("admin"), ctrl.deleteProduct);

module.exports = router;