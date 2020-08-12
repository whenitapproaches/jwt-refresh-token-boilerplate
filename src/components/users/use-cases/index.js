const makeSignupUser = require("./signup-user")
const makeSigninUser = require("./signin-user")
const makeRemoveUser = require("./remove-user")
const makeListUsers = require("./list-users")
const makeReadUser = require("./read-user")

const usersDb = require("../data-access")

const { signupValidator, signinValidator } = require("../validators")

const { accessTokenManager, refreshTokenManager } = require("@security")

module.exports = Object.freeze({
  signupUser: makeSignupUser({ usersDb, signupValidator }),
  signinUser: makeSigninUser({
    usersDb,
    comparePassword,
    signinValidator,
    accessTokenManager,
    refreshTokenManager
  }),
  removeUser: makeRemoveUser({
    usersDb,
  }),
  listUsers: makeListUsers({ usersDb }),
  readUser: makeReadUser({ usersDb }),
})

const bcrypt = require("bcrypt")
function comparePassword(password, encrypted) {
  return bcrypt.compare(password, encrypted)
}
