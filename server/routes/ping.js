const express = require("express");
const router = express.Router();

router.post("/", function(req, res, next) {
  const showStuff = process.env.stuff;
});

module.exports = router;
