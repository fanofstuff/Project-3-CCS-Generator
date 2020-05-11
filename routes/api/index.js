const router = require("express").Router();
const characterRoutes = require("./character");

// Book routes
router.use("/characters", characterRoutes);

module.exports = router;
