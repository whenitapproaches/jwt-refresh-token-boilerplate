module.exports = function makeRemoveUser({ usersDb }) {
  return async function removeUser({ id }) {
    let existingUser = await usersDb.findById({ id })
    if (!existingUser) throw new Error("User not found.")
    // make entity
    await usersDb.removeById({ id })

    return {
      id,
    }
  }
}
