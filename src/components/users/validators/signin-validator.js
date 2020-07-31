module.exports = function makeCredentialsValidator({ validator }) {
  return validator.object({
    username: validator.string().alphanum().min(5).max(30).required(),
    password: validator.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
  })
}