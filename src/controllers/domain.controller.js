const asyncHandler = require('express-async-handler')
const whois = require('whois-json')

const domainChecker = asyncHandler(async (req, res) => {
  try {
    var results = await whois(`${req.query.domain}`)
    res.json(results)
  } catch (error) {
    throw new Error(error.message)
  }
})

module.exports = { domainChecker }
