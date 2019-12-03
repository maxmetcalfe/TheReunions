const express = require("express")
const router = express.Router()
const async = require("async")
const GoogleSpreadsheet = require("google-spreadsheet")
const MessagingResponse = require("twilio").twiml.MessagingResponse;
// SMS Debug. Remove committing. //
const accountSid = 'AC31802eb19c418e6df06c7a80ea85e540';
const authToken = '4c066c996d3fa741bd48807c1545a97b';
const client = require('twilio')(accountSid, authToken);
///////////////////////////////////////////////////////

router.post("/", function(req, res) {
  console.log(req.body.Body);

  async.series([
    function getSheet(step) {
      googleSheet.getInfo(function(err, info) {
        sheet = info.worksheets.filter(checkWorksheetTitle)[0]
        console.log(sheet);
        if (!sheet) {
          res.sendStatus(404)
          return
        }
        step()
      })
    },
  ], function (err) {
    res.sendStatus(err)
  })
  // const twiml = new MessagingResponse();
  // 
  // twiml.message("Reunions info received. \n\nSee: thereunions.com");
  // 
  // res.writeHead(200, {'Content-Type': 'text/xml'});
  // res.end(twiml.toString());
})


module.exports = router