module.exports = function buildMakeUser({validator }) {
  return function makeUser({
    username,
    password,
    createdAt = Date.now(),
    updatedAt = Date.now(),
  } = {}) {
    try {
      validator.validateAsync({
        username, password
      })
    }
    catch(error) {
      throw new Error(error)
    }

    return Object.freeze({
      getUsername: () => username,
      getPassword: () => password,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt
    })
  }
}
