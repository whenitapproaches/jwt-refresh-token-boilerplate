const makeSignupUser = require("./signup-user")

const usersDb = require("../data-access")

module.exports = Object.freeze({
  signupUser: makeSignupUser({ usersDb }),
})
