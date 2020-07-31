const makeUser = require("../entity")

module.exports = function makeSignupUser({ usersDb, signupValidator }) {
  return async function signupUser(userInfo) {
    await signupValidator.validateAsync(userInfo)

    const user = await makeUser(userInfo)
    let exist = await usersDb.findOne({
      username: user.getUsername(),
    })
    if (exist) {
      throw new Error("Username has already existed.")
    }
    return usersDb.create({
      username: user.getUsername(),
      password: user.getHashedPassword(),
      createdAt: user.getCreatedAt(),
      updatedAt: user.getUpdatedAt(),
    })
  }
}
