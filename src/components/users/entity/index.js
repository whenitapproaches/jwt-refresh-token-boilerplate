const bcrypt = require('bcrypt')

const { userValidator } = require("../validators")

const buildMakeComment = require("./user")

const saltRounds = 10
async function encrypt(text) {
  return bcrypt.hash(text, saltRounds)
}

module.exports = buildMakeComment({ validator: userValidator, encrypt })
