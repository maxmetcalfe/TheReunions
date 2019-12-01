const express = require("express")
const router = express.Router()
const GoogleSpreadsheet = require("google-spreadsheet")
const async = require("async")

const fields = [
  "name",
  "location",
  "lat",
  "lng",
  "category",
  "members"
]

const googleSheet = new GoogleSpreadsheet(process.env.SHEET_ID)

function checkWorksheetTitle(worksheet) {
  return worksheet.title === process.env.WORKSHEET_TITLE
}

let sheet

router.get("/sms", function(req, res) {
  res.send("Hello world!");
});

module.exports = router