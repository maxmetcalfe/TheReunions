const express = require("express")
const webpack = require("webpack");
const path = require("path")
const middleware = require("webpack-dev-middleware");
const compiler = webpack(require("../webpack.config.js"));

const app = express()
const data = require("./routes/data")

const port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, "..", "/client/dist")))

app.use("/data", data)

app.use(middleware(compiler));

app.get("/",function(req, res) {
   res.sendFile(path.join(__dirname, "..", "/client/dist/index.html"))
})

app.set("port", (port))

app.listen(app.get("port"), function () {
  console.log( `Running on ${port}!`)
})
