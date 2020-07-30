module.exports = function makePostUser({ signupUser }) {
  return async function postUser(httpRequest) {
    try {
      let userInfo = httpRequest.body
      let user = await signupUser(userInfo)
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: {
          user
        }
      }
    } catch (error) {
      console.log(error)
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 400,
        body: {
          error: error.message,
        },
      }
    }
  }
}
