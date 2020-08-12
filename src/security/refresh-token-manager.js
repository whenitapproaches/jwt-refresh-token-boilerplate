const configs = require("@configs")

module.exports = function makeRefreshTokenManager({
  random_string_generator,
  time,
}) {
  return {
    generate() {
      return random_string_generator.generate()
    },
    generateExpirationDate() {
      let parsed = configs.app.authentication.refresh_token_time.split(" ")
      let duration = parsed[0]
      let unit = parsed[1]
      return time().add(duration, unit).toDate()
    },
    verify({ clientRefreshToken, serverRefreshToken }) {
      return clientRefreshToken === serverRefreshToken
    },
    validate({ refresh_token, refresh_token_expired_at }) {
      if (!refresh_token) return false
      let now = time()
      let expiration = time(refresh_token_expired_at)
      if (expiration.isBefore(now)) {
        return false
      }
      return true
    },
  }
}
