const makeHttpResponse = require("@common/http-response")

module.exports = function makePostUser({ signupUser }) {
  return async function postUser(httpRequest) {
    try {
      let userInfo = httpRequest.getBody()
      let result = await signupUser(userInfo)
      return makeHttpResponse({
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          message: "Signed up successfully.",
          result,
        },
      })
    } catch (error) {
      return makeHttpResponse({
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          result,
        },
      })
    }
  }
}
