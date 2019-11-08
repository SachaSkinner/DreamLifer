const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("./api");
const authRoutes = require('./auth');
const todoRoutes = require('./todo');

// router.use("/api", apiRoutes);
router.use('/auth', authRoutes);

router.use('/api', todoRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;