const joi = require("@hapi/joi")

const makeUserValidator = require("./user-validator")

const makeSigninValidator = require("./signin-validator")

const makeSignupValidator = require("./signup-validator")

module.exports = Object.freeze({
  userValidator: makeUserValidator({ validator: joi }),
  signinValidator: makeSigninValidator({ validator: joi }),
  signupValidator: makeSignupValidator({ validator: joi }),
})
