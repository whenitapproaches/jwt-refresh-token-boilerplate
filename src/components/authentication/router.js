const express = require("express")

const router = express.Router

const config = require("./config")

const {
  router: { login: loginPath, signup: signupPath, logout: logoutPath },
} = config


router.post(loginPath, (req, res) => {
  
})
