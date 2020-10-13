var express = require("express");
const databaseAccess = require("../utils/databaseAccess");
var router = express.Router();
var database = require("../utils/databaseAccess");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/users", require("./users") )
router.use("/classes", require("./classes"));

module.exports = router;
