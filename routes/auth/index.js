const router = require("express").Router();
const cookiesAuth = require("./cookiesauth");

router.use("/cookies", cookiesAuth);

module.exports = router;
