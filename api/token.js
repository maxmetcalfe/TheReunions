
module.exports = (req, res) => {
  if (!process.env.TOKEN) {
    res.status(404)
  }
  res.send(process.env.TOKEN)
}
