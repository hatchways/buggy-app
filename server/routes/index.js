const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
  const price = process.env.PRICE * 10;
  res.status(200).send({ welcomeMessage: "Welcome" });
});

module.exports = router;
