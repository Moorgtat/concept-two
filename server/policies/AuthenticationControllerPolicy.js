const Joi = require('@hapi/joi')

module.exports = {
  register (req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string().pattern(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    })

    const {error, value} = schema.validate(req.body)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid adress.'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Wrong password format [a-z, A-Z, 0-9, min 8, max 32].'
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information.'
          })
      }
    } else {
      next()
    }
  }
}
