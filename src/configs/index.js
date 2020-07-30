require("dotenv").config()

module.exports = {
  app: {
    port: process.env.PORT || 3000,
    database_uri: process.env.DB_URI || 'mongodb://localhost:27017',
    database_name: process.env.DB_NAME || 'test',
    api_root_uri: process.env.API_ROOT_URI || 'api'
  },
}
