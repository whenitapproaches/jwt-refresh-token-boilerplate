const makeHttpResponse = require("@common/http-response")

module.exports = function makeDeleteUser({ removeUser }) {
  return async function postUserLogin(httpRequest) {
    try {
      let { id } = httpRequest.getParams()
      let result = await removeUser({ id })
      return makeHttpResponse({
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          message: "User removed successfully.",
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
