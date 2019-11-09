const router = require("express").Router();
const todoRoutes = require("./tododb");

//todo routes
router.use("/todo", todoRoutes);

module.exports = router;
