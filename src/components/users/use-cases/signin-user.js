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
  accessTokenGenerator,
}) {
  return async function signinUser(credentials) {
    await signinValidator.validateAsync(credentials)
    let user = await makeUser(credentials)
    let existUser = await usersDb.findOne({
      username: user.getUsername(),
    })
    if (!existUser) throw new Error("Username not found.")
    let isPasswordMatched = await comparePassword(
      user.getPassword(),
      existUser.password
    )
    if (!isPasswordMatched) throw new Error("Wrong password.")
    return {
      username: user.getUsername(),
    }
  }
}
