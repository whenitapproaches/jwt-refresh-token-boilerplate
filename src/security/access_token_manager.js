module.exports = function makeAccessTokenManager({
  jwt,
  private_key,
  jwt_time,
  moment,
}) {
  function makeJWTExp() {
    return moment().add(jwt_time.split(" "))
  }

  return {
    generateAccessToken(payload) {
      let exp = makeJWTExp()
      return jwt.sign({ ...payload, exp: exp }, private_key)
    },
  }
}
