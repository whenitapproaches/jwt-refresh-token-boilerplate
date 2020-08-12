const makeHttpResponse = require("@common/http-response")

module.exports = function makeGetUser({ readUser }) {
  return async function getUser(httpRequest) {
    try {
      let { id } = httpRequest.getParams()
      let result = await readUser({ id })
      return makeHttpResponse({
        headers: {
          "Content-Type": "application/json",
        },
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
