require("module-alias/register")

const express = require("express")

const app = express()

const chalk = require("chalk")

const configs = require("./configs")

const cors = require("cors")

const morgan = require("morgan")

app.use(
  express.urlencoded({
    extended: false,
  })
)
app.use(express.json())

app.use(cors())

app.use(morgan("dev"))

const user = require("@components/users")

app.use(user)

const notFoundController = require('@common/controllers/not-found')
const makeExpressCallback = require('@utils/express-callback')
app.use(makeExpressCallback(notFoundController))

let port = configs.app.port
app.listen(port, () => {
  console.log(chalk.green("Server is listening on " + port))
})
