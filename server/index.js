const express = require("express")
const app = express()
const path = require("path")
// const data = require("./routes/data")

const port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, "..", "/client/dist")))
// 
// app.use("/data", data)

app.get("/",function(req, res) {
   res.sendFile(path.join(__dirname, "..", "/client/dist/index.html"))
})

app.set("port", (port))

app.listen(app.get("port"), function () {
  console.log( `Running on ${port}!`)
})
