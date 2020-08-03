module.exports = function buildMakeUser({ validator, encrypt }) {
  return async function makeUser({
    username,
    password,
    hashedPassword = "",
    createdAt = Date.now(),
    updatedAt = Date.now(),
  } = {}) {
    try {
      await validator.validateAsync({
        username,
        password,
      })
      if (!hashedPassword) hashedPassword = await encrypt(password)
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
