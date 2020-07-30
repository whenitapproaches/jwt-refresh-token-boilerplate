const makeUser = require('../entity')

module.exports = function makeSignupUser({ usersDb }) {  
  return async function signupUser(userInfo) {
    console.log(userInfo)
    const user = makeUser(userInfo)
    let exist = await usersDb.findOne({
      username: user.getUsername()
    })
    if(exist) {
      throw new Error("Username has already existed.")
    }
    return usersDb.create({
      username: user.getUsername(),
      password: user.getPassword(),
      createdAt: user.getCreatedAt(),
      updatedAt: user.getUpdatedAt()
    })
  }
} 