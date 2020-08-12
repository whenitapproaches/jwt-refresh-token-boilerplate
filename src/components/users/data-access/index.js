const mongoose = require("@configs/db")

const Schema = mongoose.Schema

const userSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  refresh_token: {
    type: String,
  },
  refresh_token_expired_at: {
    type: Date
  },
  created_at: {
    type: Date,
    required: true,
  },
  updated_at: {
    type: Date,
    required: true,
  },
})

const userModel = mongoose.model("User", userSchema)

const makeUsersDb = require("./users-db")

module.exports = makeUsersDb({ userModel })
