const makeUser = require("../entity")

module.exports = function makeListUsers({ usersDb }) {
  return async function listUsers() {
    let result = await usersDb.findAll()
    let users = await Promise.all(
      [...result].map(async (user) => {
        let { _id: id, username, created_at, updated_at } = user
        let userEntity = await makeUser({
          id,
          username,
          created_at,
          updated_at
        })
        return {
          id: userEntity.getId(),
          username: userEntity.getUsername(),
          created_at: userEntity.getCreatedAt(),
          updated_at: userEntity.getUpdatedAt()
        }
      })
    )
    return users
  }
}
