const express = require("express")
const app = express()
const path = require("path")
const data = require("./src/routes/data")

const port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname + "/dist")))

app.use("/data", data)

app.get("/",function(req, res) {
   res.sendFile(path.join(__dirname + "dist/index.html"))
})

app.set("port", (port))

app.listen(app.get("port"), function () {
  console.log( `Running on ${port}!`)
})
