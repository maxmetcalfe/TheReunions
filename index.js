const express = require("express");
const app = express()

app.get("/", function (req, res) {
  res.send("Welcome to The Reunions.")
})

app.listen(3000, function () {
  console.log("Running on 3000!")
})