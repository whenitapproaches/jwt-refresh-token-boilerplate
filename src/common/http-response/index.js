const buildMakeHttpResponse = require('./http-response')
const errorHandler = require('../error-handlers')

module.exports = buildMakeHttpResponse({ errorHandler })