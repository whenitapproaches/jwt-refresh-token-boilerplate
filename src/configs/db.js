const mongoose = require('mongoose')
const configs = require('@configs')

const chalk = require('chalk')
mongoose.connect(configs.app.database_uri + '/' + configs.app.database_name, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log(chalk.green('Database connected.')))
.catch(err => console.log(err))

module.exports = mongoose