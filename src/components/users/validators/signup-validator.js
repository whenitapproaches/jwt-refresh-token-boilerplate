module.exports = function makeSignupValidator({ validator }) {
  return validator
    .object({
      username: validator.string().alphanum().min(5).max(30).required(),
      password: validator.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
      confirmed_password: validator.ref("password"),
    })
    .with("password", "confirmed_password")
}
