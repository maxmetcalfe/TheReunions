const { GoogleSpreadsheet } = require("google-spreadsheet")

const fields = [
  "name",
  "location",
  "lat",
  "lng",
  "category",
  "members"
]

module.exports = async (req, res) => {
  // Google Sheets API Auth
  const googleSheet = new GoogleSpreadsheet("1de_h32ppogTbUuhIxc15wUbeURbAgThVt7tQD2HYgyk")
  await googleSheet.useServiceAccountAuth({
    client_email: process.env.CLIENT_EMAIL,
    private_key: process.env.PRIVATE_KEY
  });

  // Get target worksheet
  await googleSheet.loadInfo()
  const sheet = googleSheet.sheetsByIndex.find((sheet) => { return sheet.title === process.env.WORKSHEET_TITLE})

  const rows = await sheet.getRows({
    offset: 2,
    limit: 200
  })

  // Assemble data object from rows
  let reunions = []
  rows.map((row) => {
    let reunion = {}
    fields.map((field) => {
      reunion[field] = row[field]
    })
    reunions.push(reunion)
  })

  res.json(reunions)
}
