
module.exports = function buildMakeUser({ validator, encrypt }) {
  return async function makeUser({
    username,
    password,
    createdAt = Date.now(),
    updatedAt = Date.now(),
  } = {}) {
    try {
      await validator.validateAsync({
        username,
        password,
      })
      var hashedPassword = await encrypt(password)
    } catch (error) {
      throw new Error(error)
    }

    return Object.freeze({
      getUsername: () => username,
      getPassword: () => password,
      getHashedPassword: () => hashedPassword,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,
    })
  }
}
