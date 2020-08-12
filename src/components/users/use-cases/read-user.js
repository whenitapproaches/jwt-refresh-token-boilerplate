const makeUser = require("../entity")

module.exports = function makeReadUser({ usersDb }) {
  return async function readUser({ id }) {
    let existingUser = await usersDb.findById({ id })
    if (!existingUser) throw new Error("User not found.")

    let { username, created_at, updated_at } = existingUser

    let userEntity = await makeUser({
      id,
      username,
      created_at,
      updated_at,
    })

    return {
      id: userEntity.getId(),
      username: userEntity.getUsername(),
      created_at: userEntity.getCreatedAt(),
      updated_at: userEntity.getUpdatedAt(),
    }
  }
}
