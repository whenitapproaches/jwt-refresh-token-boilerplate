const user = require("../entity/user")

module.exports = function makeUsersDb({ userModel }) {
  return Object.freeze({
    create,
    findById,
    findOne,
    findAll,
    removeById,
    exists,
    updateById,
  })
  function findById({ id }) {
    return userModel.findById(id)
  }
  function findOne({ username }) {
    return userModel.findOne({ username })
  }
  function findAll() {
    return userModel.find()
  }
  function create({ id, ...userInfo }) {
    return userModel.create({ _id: id, ...userInfo })
  }
  function exists({ username }) {
    return userModel.exists({ username })
  }
  function updateById({ id, ...changes }) {
    return userModel.findByIdAndUpdate(id, changes)
  }
  function removeById({ id }) {
    return userModel.findByIdAndDelete(id)
  }
}
