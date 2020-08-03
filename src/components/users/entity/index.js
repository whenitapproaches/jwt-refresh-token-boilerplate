const bcrypt = require('bcrypt')

const { userValidator } = require("../validators")

const buildMakeUser = require("./user")

const saltRounds = 10
async function encrypt(text) {
  return bcrypt.hash(text, saltRounds)
}

module.exports = buildMakeUser({ validator: userValidator, encrypt })
