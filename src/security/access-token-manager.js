module.exports = function makeAccessTokenManager({
  jwt,
  private_key,
  jwt_time,
  moment,
}) {
  function makeAccessTokenExpiration() {
    return moment()
      .add(...jwt_time.split(" "))
      .unix()
  }

  return {
    generate(payload) {
      let exp = makeAccessTokenExpiration()
      return jwt.sign({ ...payload, exp: exp }, private_key)
    },
    verify(token) {
      return jwt.verify(token, private_key)
    },
  }
}
