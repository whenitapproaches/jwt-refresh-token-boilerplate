module.exports = function makeUsersDb({ userModel }) {
  return Object.freeze({
    create,
    update,
    remove,
    findById,
    findOne
  })
  async function findById({ id: _id }) {
    let result = await userModel.findById(id)
    return result
  }
  async function findOne(userInfo) {
    let result = await userModel.findOne(userInfo)
    return result
  }
  async function create({ id, ...userInfo }) {
    let result = await userModel.create({ _id: id, ...userInfo })
    return result
  }
  async function update({}) {}
  async function remove({}) {}
}
