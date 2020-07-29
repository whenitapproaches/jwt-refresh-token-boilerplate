const express = require("express")

const app = express()

const chalk = require("chalk")

const configs = require("./configs")

const bodyParser = require('body-parser')

const cors = require('cors')

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.use(cors())

let port = configs.app.port
app.listen(port, () => {
  console.log(chalk.green("Server is listening on " + port))
})
