const makePostUser = require("./post-user")
const makePostUserLogin = require("./post-user-login")
const makeDeleteUser = require("./delete-user")
const makeGetUsers = require("./get-users")
const makeGetUser = require("./get-user")

const {
  signupUser,
  signinUser,
  removeUser,
  listUsers,
  readUser,
  updateUser,
} = require("../use-cases")

module.exports = Object.freeze({
  postUser: makePostUser({ signupUser }),
  postUserLogin: makePostUserLogin({ signinUser }),
  deleteUser: makeDeleteUser({ removeUser }),
  getUsers: makeGetUsers({ listUsers }),
  getUser: makeGetUser({ readUser }),
})
