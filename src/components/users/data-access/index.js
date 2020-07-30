const mongoose = require("@configs/db")

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
})

const userModel = mongoose.model("User", userSchema)

const makeUsersDb = require("./users-db")

module.exports = makeUsersDb({ userModel })
