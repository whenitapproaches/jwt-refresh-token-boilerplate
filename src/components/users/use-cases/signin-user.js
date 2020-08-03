const makeUser = require("../entity")

/**
 *
 *
 * @param {*} {
 *   usersDb,
 *   comparePassword,
 *   signinValidator,
 *   accessTokenGenerator
 * }
 * @returns SigninUser use case
 */
module.exports = function makeSigninUser({
  usersDb,
  comparePassword,
  signinValidator,
  accessTokenManager,
}) {
  return async function signinUser(credentials) {
    await signinValidator.validateAsync(credentials)
    let existUser = await usersDb.findOne({
      username: credentials.username,
    })
    if (!existUser) throw new Error("Username not found.")
    // make entity
    let user = await makeUser({
      username: existUser.username,
      hashedPassword: existUser.password,
    })
    let isPasswordMatched = await comparePassword(
      credentials.password,
      user.getHashedPassword()
    )
    if (!isPasswordMatched) throw new Error("Wrong password.")

    let accessToken = accessTokenManager.generateAccessToken({
      username: user.getUsername(),
    })

    return {
      username: user.getUsername(),
      accessToken
    }
  }
}
