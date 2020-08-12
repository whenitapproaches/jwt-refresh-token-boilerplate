module.exports = function buildMakeUser({ Id, validator, encrypt }) {
  return async function makeUser({
    id = Id.makeId(),
    username,
    password = "",
    hashedPassword = "",
    created_at = Date.now(),
    updated_at = Date.now(),
  } = {}) {
    try {
      await validator.validateAsync({
        username,
        password,
      })
      if(password && !hashedPassword) hashedPassword = await encrypt(password)
    } catch (error) {
      throw new Error(error)
    }

    return Object.freeze({
      getUsername: () => username,
      getPassword: () => password,
      getHashedPassword: () => hashedPassword,
      getCreatedAt: () => created_at,
      getUpdatedAt: () => updated_at,
      getId: () => id
    })
  }
}
