const makeHttpResponse = require("@common/http-response")

module.exports = function makePostUserLogin({ signinUser }) {
  return async function postUserLogin(httpRequest) {
    try {
      let credentials = httpRequest.getBody()
      let result = await signinUser(credentials)
      let { refresh_token, ...info } = result
      return makeHttpResponse({
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          message: "Signed in successfully.",
          result: {
            ...info,
          },
        },
        cookies: [
          {
            name: "refresh_token",
            value: refresh_token,
            options: {
              httpOnly: true,
              expires: info.refresh_token_expired_at,
            },
          },
        ],
      })
    } catch (error) {
      return makeHttpResponse({
        headers: {
          "Content-Type": "application/json",
        },
        error: error,
      })
    }
  }
}
