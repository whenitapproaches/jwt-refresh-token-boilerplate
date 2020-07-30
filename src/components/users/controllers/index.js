const makePostUser = require("./post-user")

const { signupUser } = require("../use-cases")

module.exports = Object.freeze({
  postUser: makePostUser({ signupUser }),
})
