module.exports = function makeExpressCallback(controller) {
  return (request, response) => {
    const httpRequest = {
      body: request.body,
      query: request.query,
      params: request.params,
      // ip: req.ip,
      method: request.method,
      path: request.path,
      headers: {
        "Content-Type": request.get("Content-Type"),
        // Referer: req.get("referer"),
        // "User-Agent": req.get("User-Agent"),
      },
    }
    controller(httpRequest)
    .then(httpResponse => {
      if(httpResponse.headers) {
        response.set(httpResponse.headers)
      }
      response.type('json')
      response.status(httpResponse.statusCode).send(httpResponse.body)
    })
    .catch(error => response.status(500).send({
      error: "An unknown error occurred."
    }))
  }
}
