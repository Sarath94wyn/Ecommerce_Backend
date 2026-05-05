const router = require("express").Router();
const ctrl = require("../controllers/analyticsController");

router.get("/recommend", ctrl.recommend);

module.exports = router;