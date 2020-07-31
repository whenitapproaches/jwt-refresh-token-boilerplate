const makeHttpResponse = require("@common/http-response")

module.exports = function makePostUserLogin({ signinUser }) {
  return async function postUserLogin(httpRequest) {
    try {
      let credentials = httpRequest.getBody()
      let result = await signinUser(credentials)
      return makeHttpResponse({
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          message: "Signed in successfully.",
          result,
        },
      })
    } catch (error) {
      console.log(error)
      return makeHttpResponse({
        headers: {
          "Content-Type": "application/json",
        },
        error: error
      })
    }
  }
}
