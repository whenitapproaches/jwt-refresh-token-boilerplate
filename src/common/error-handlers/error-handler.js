module.exports = function makeErrorHandler({ STATUS_CODES }) {
  return function errorHandler(error) {
    let result = {}
    if (!error) {
      result.statusCode = STATUS_CODES.OK
      return result
    }
    result.message = error.message
    switch (error.name) {
      case "ValidationError":
        result.statusCode = STATUS_CODES.UNPROCESSABLE_ENTITY
        break
      case "NotFoundError":
        result.statusCode = STATUS_CODES.NOT_FOUND
        break
      default:
        result.statusCode = STATUS_CODES.BAD_REQUEST
    }
    return result
  }
}
