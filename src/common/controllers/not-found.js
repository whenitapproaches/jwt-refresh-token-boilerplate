const makeHttpResponse = require("@common/http-response")

const NotFoundError = {
  name: "NotFoundError",
  message: "Not Found."
}

module.exports = async function notFound() {
  return makeHttpResponse({
    headers: {
      "Content-Type": "application/json",
    },
    error: NotFoundError
  })
}
