const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
  let ready;
  res.status(200).send({ ready });
});

module.exports = router;
