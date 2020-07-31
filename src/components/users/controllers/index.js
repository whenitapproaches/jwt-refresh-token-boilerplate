const makePostUser = require("./post-user")
const makePostUserLogin = require('./post-user-login')

const { signupUser, signinUser } = require("../use-cases")

module.exports = Object.freeze({
  postUser: makePostUser({ signupUser }),
  postUserLogin: makePostUserLogin({ signinUser })
})
