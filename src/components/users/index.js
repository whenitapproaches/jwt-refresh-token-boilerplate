const makeExpressCallback = require('@utils/express-callback')
const router = require('express').Router()
const configs = require('@configs')
const api_root_uri = configs.app.api_root_uri

const { postUser } = require('./controllers')

const path = `/${api_root_uri}/users`

console.log(path)

router.post(`${path}`, makeExpressCallback(postUser))

module.exports = router