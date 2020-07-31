const makeHttpRequest = require("@common/http-request")

module.exports = function makeExpressCallback(controller) {
  return (request, response) => {
    const httpRequest = makeHttpRequest(request)
    controller(httpRequest)
      .then((httpResponse) => {
        let [headers, statusCode, type, body] = [
          httpResponse.getHeaders(),
          httpResponse.getStatusCode(),
          httpResponse.getType(),
          httpResponse.getBody(),
        ]
        response.set(headers).status(statusCode).type(type)
        response.send(body)
      })
      .catch((error) =>
        response.status(500).send({
          error: "An unknown error occurred.",
        })
      )
  }
}
