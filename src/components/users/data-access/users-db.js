const user = require("../entity/user")

module.exports = function makeUsersDb({ userModel }) {
  return Object.freeze({
    create,
    update,
    remove,
    findById,
    findOne,
    exists
  })
  function findById({ id: _id }) {
    return userModel.findById(id)
  }
  function findOne(userInfo) {
    return userModel.findOne(userInfo)
  }
  function create({ id, ...userInfo }) {
    return userModel.create({ _id: id, ...userInfo })
  }
  function exists({ username }) {
    return userModel.exists({ username })
  }
  async function update({}) {}
  async function remove({}) {}
}
