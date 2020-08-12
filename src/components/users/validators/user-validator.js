module.exports = function makeUserValidator({ validator }) {
  return validator.object({
    username: validator.string().alphanum().min(5).max(30).required(),
    password: validator.optional(),
  })
}