const makeUser = require("../entity")

module.exports = function makeSignupUser({ usersDb, signupValidator }) {
  return async function signupUser(userInfo) {
    await signupValidator.validateAsync(userInfo)
    let existingUser = await usersDb.exists({
      username: userInfo.username,
    })
    if (existingUser) {
      throw new Error("Username has already existed.")
    }
    
    const userEntity = await makeUser(userInfo)
    
    await usersDb.create({
      id: userEntity.getId(),
      username: userEntity.getUsername(),
      password: userEntity.getHashedPassword(),
      created_at: userEntity.getCreatedAt(),
      updated_at: userEntity.getUpdatedAt(),
    })

    return {
      id: userEntity.getId(),
      username: userEntity.getUsername(),
      created_at: userEntity.getCreatedAt(),
      updated_at: userEntity.getUpdatedAt(),
    }
  }
}
