const { userValidator } = require("../validators")

const buildMakeComment = require("./user")

module.exports = buildMakeComment({validator: userValidator })
