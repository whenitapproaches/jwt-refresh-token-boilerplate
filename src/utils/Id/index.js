const { nanoid } = require('nanoid')

module.exports = Object.freeze({
  makeId: () => nanoid() 
})