const makeHttpRequest = require("@common/http-request")

module.exports = function makeExpressMiddleware(middleware) {
  return (request, response, next) => {
    const httpRequest = makeHttpRequest(request)
    middleware(httpRequest)
    .then(next => {
      next()
    })
    .catch(error => response.status(500).send({
      error: "An unknown error occurred."
    }))
  }
}
