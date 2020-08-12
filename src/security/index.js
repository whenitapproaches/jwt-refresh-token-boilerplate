const jwt = require("jsonwebtoken")
const configs = require("@configs")
const private_key = configs.app.private_key
const jwt_time = configs.app.authentication.jwt_time
const moment = require("moment")
const makeAccessTokenManager = require("./access-token-manager")
const makeRefreshTokenManager = require("./refresh-token-manager")


const cryptoRandomString = require("crypto-random-string")

const random_string_generator = {
  generate() {
    return cryptoRandomString({ length: 20 })
  },
}

module.exports = {
  accessTokenManager: makeAccessTokenManager({
    jwt,
    private_key,
    jwt_time,
    moment,
  }),
  refreshTokenManager: makeRefreshTokenManager({
    random_string_generator,
    time: moment
  })
}
