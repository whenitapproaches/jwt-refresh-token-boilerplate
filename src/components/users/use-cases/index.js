const makeSignupUser = require("./signup-user")
const makeSigninUser = require("./signin-user")

const usersDb = require("../data-access")

const { signupValidator, signinValidator } = require("../validators")

module.exports = Object.freeze({
  signupUser: makeSignupUser({ usersDb, signupValidator }),
  signinUser: makeSigninUser({ usersDb, comparePassword, signinValidator }),
})

const bcrypt = require("bcrypt")
function comparePassword(password, encrypted) {
  return bcrypt.compare(password, encrypted)
}
