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
        message: "Signed up successfully.",
        body: {
          result,
        },
      })
    } catch (error) {
      return makeHttpResponse({
        headers: {
          "Content-Type": "application/json",
        },
        error: error,
      })
    }
  }
}
