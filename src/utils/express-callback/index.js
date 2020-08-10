const makeHttpRequest = require("@common/http-request")

module.exports = function makeExpressCallback(controller) {
  return (request, response) => {
    const httpRequest = makeHttpRequest(request)
    controller(httpRequest)
      .then((httpResponse) => {
        let [headers, statusCode, type, body, cookies] = [
          httpResponse.getHeaders(),
          httpResponse.getStatusCode(),
          httpResponse.getType(),
          httpResponse.getBody(),
          httpResponse.getCookies(),
        ]
        if (cookies) {
          cookies.forEach((cookie) =>
            response.cookie(cookie.name, cookie.value, cookie.options)
          )
        }
        response.set(headers).status(statusCode).type(type)
        response.send(body)
      })
      .catch((error) => {
        console.log(error)
        response.status(500).send({
          error: "An unknown error occurred.",
        })
      })
  }
}
