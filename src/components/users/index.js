const makeExpressCallback = require('@utils/express-callback')
const router = require('express').Router()
const configs = require('@configs')
const api_root_uri = configs.app.api_root_uri

const { postUser, postUserLogin } = require('./controllers')

const path = `/${api_root_uri}/users`

router.post(`${path}`, makeExpressCallback(postUser))
router.post(`${path}/login`, makeExpressCallback(postUserLogin))

module.exports = router