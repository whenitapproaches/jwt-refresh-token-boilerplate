const makeExpressCallback = require("@utils/express-callback")
const router = require("express").Router()
const configs = require("@configs")
const api_root_uri = configs.app.api_root_uri

const { postUser, postUserLogin, deleteUser, getUsers, getUser } = require("./controllers")

const path = `/${api_root_uri}/users`

router.get(`${path}`, makeExpressCallback(getUsers))
router.get(`${path}/:id`, makeExpressCallback(getUser))
router.post(`${path}`, makeExpressCallback(postUser))
router.post(`${path}/login`, makeExpressCallback(postUserLogin))
router.delete(`${path}/:id`, makeExpressCallback(deleteUser))

module.exports = router
