const makeUser = require("../entity")

module.exports = function makeSignupUser({ usersDb, signupValidator }) {
  return async function signupUser(userInfo) {
    await signupValidator.validateAsync(userInfo)

    let exist = await usersDb.exists({
      username: userInfo.username,
    })
    if (exist) {
      throw new Error("Username has already existed.")
    }

    const user = await makeUser(userInfo)

    return usersDb.create({
      username: user.getUsername(),
      password: user.getHashedPassword(),
      createdAt: user.getCreatedAt(),
      updatedAt: user.getUpdatedAt(),
    })
  }
}
