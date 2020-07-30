const joi = require("@hapi/joi")

const makeUserValidator = require("./user-validator")

module.exports = Object.freeze({
  userValidator: makeUserValidator({ validator: joi })
})
