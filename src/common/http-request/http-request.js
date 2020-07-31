module.exports = function buildMakeHttpRequest() {
  return function makeHttpRequest(request) {
    let { body, query, params, ip, method, path } = request
    let headers = {
      "Content-Type": request.get("Content-Type"),
      // Referer: req.get("referer"),
      // "User-Agent": req.get("User-Agent"),
    }
    return {
      getBody: () => body,
      getQuery: () => query,
      getParams: () => params,
      getIp: () => ip,
      getMethod: () => method,
      getPath: () => path,
      getHeaders: () => headers
    }
  }
}
