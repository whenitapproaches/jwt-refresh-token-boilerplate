const makeUser = require("../entity")

module.exports = function makeSigninUser({
  usersDb,
  comparePassword,
  signinValidator,
  accessTokenManager,
  refreshTokenManager,
}) {
  return async function signinUser(credentials) {
    await signinValidator.validateAsync(credentials)
    let existingUser = await usersDb.findOne({
      username: credentials.username,
    })
    if (!existingUser) throw new Error("Username not found.")
    // make entity
    let { _id: id, username, password, created_at, updated_at } = existingUser
    let userEntity = await makeUser({
      username,
      id,
      hashedPassword: password,
      created_at,
      updated_at,
    })
    let isPasswordMatched = await comparePassword(
      credentials.password,
      userEntity.getHashedPassword()
    )
    if (!isPasswordMatched) throw new Error("Wrong password.")

    let { refresh_token, refresh_token_expired_at } = existingUser
    let refreshTokenValidation = refreshTokenManager.validate({
      refresh_token,
      refresh_token_expired_at,
    })
    if (!refreshTokenValidation) {
      refresh_token = refreshTokenManager.generate()
      refresh_token_expired_at = refreshTokenManager.generateExpirationDate()
      await usersDb.updateById({
        id,
        refresh_token,
        refresh_token_expired_at,
      })
    }

    let accessToken = accessTokenManager.generate({
      username: userEntity.getUsername(),
    })

    return {
      id: userEntity.getId(),
      username: userEntity.getUsername(),
      access_token: accessToken,
      refresh_token,
      refresh_token_expired_at
    }
  }
}
