var express = require('express');
var app = express();

app.get("/json", (req, res) => {
  var mymessage = process.env.GREETING + ' json';
  if (process.env.MESSAGE_STYLE === "uppercase"){
    mymessage = mymessage.toUpperCase();
  }
  res.json({
    message: mymessage
  });
});




















 module.exports = app;
