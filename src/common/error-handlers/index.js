const makeErrorHandler = require("./error-handler")

const STATUS_CODES = {
  OK: 200,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
  UNPROCESSABLE_ENTITY: 422,
}

module.exports = makeErrorHandler({ STATUS_CODES })
