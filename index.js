const express = require("express");
const app = express()

app.get("/", function (req, res) {
  res.send("Welcome to The Reunions.")
})

app.set('port', (process.env.PORT || 3000));
app.listen(app.get("port"), function () {
  console.log("Running on 3000!")
})