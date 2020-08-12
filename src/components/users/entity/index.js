const bcrypt = require('bcrypt')

const { userValidator } = require("../validators")

const Id = require('@utils/Id')

const buildMakeUser = require("./user")

const saltRounds = 10
async function encrypt(text) {
  return bcrypt.hash(text, saltRounds)
}

module.exports = buildMakeUser({ Id, validator: userValidator, encrypt })
