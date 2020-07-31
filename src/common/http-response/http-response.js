module.exports = function buildMakeHttpResponse({ errorHandler }) {
  return function makeHttpResponse({
    headers = {},
    error = null,
    body = {},
    type = "json",
  }) {
    let { statusCode, message = "" } = errorHandler(error)
    if (message) body.message = message
    return {
      getBody: () => body,
      getStatusCode: () => statusCode,
      getHeaders: () => headers,
      getType: () => type,
    }
  }
}
