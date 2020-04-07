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


module.exports = (req, res) => {
  let reunions = []
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

    function readWorksheet() {
      sheet.getRows({
        offset: 2,
        limit: 200
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
      })
    }
  ], function (err) {
    res.sendStatus(err)
  })
}
