const jwt = require("jsonwebtoken")
const configs = require("@configs")
const private_key = configs.app.private_key
const jwt_time = configs.app.authenticaiton.jwt_time
const moment = require("moment")
const makeAccessTokenManager = require("./access_token_manager")

module.exports = {
  accessTokenManager: makeAccessTokenManager({
    jwt,
    private_key,
    jwt_time,
    moment,
  }),
}
