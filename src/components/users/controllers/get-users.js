const makeHttpResponse = require("@common/http-response")

module.exports = function makeGetUsers({ listUsers }) {
  return async function getUsers() {
    try {
      let result = await listUsers()
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
        error: error
      })
    }
  }
}