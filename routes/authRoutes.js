const router = require("express").Router();
const ctrl = require("../controllers/authController");

router.post("/register", ctrl.register);
router.post("/login", ctrl.login);

router.get("/test", (req, res) => {
  res.send("Auth route working");
});

module.exports = router;