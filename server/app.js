const express = require("express");
const { join } = require("path");
const logger = require("morgan");

const __ = require("./routes/stuff");
const _ = require("./routes/otherStuff");
const ___ = require("./routes/?");

const { json, urlencoded } = express;

var app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "public")));

var _0x5b4d = [
  "\x2F\x62\x75\x67\x67\x69\x66\x79",
  "\x75\x73\x65",
  "\x2F\x73\x74\x75\x66\x66"
];
var _0xb9a1 = ["\x2F\x6D\x61\x6D\x62\x6F", "\x75\x73\x65"];
app[_0x5b4d[1]](_0x5b4d[0], _);
app[_0x5b4d[1]](_0x5b4d[2], __);
app[_0xb9a1[1]](_0xb9a1[0], ___);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = app;
