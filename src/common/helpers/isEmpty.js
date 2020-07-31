module.exports = function isObjectEmpty(object) {
  // As Object.keys(new Date()).length === 0, we need to validate its constructor
  return Object.keys(object).length === 0 && obj.constructor === Object
}