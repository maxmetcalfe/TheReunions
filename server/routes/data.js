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
let reunions = []

router.get("/", function(req, res) {
  async.series([
    function getSheet(step) {
      googleSheet.getInfo(function(err, info) {
        sheet = info.worksheets.filter(checkWorksheetTitle)[0]
        if (!sheet) {
          res.sendStatus(404)
          return
        }
        step()
      })
    },

    function readWorksheet(step) {
      sheet.getRows({
        offset: 2,
        "limit": 100
      }, function(err, rows) {
        rows.forEach(function(row) {
          var reunion = {}
          fields.forEach(function(field) {
            reunion[field] = row[field]
          })
          reunions.push(reunion)
        })

        res.json(reunions)
        return
        step()
      })
    }
  ], function (err, result) {
    res.sendStatus(err)
  })
})


module.exports = router