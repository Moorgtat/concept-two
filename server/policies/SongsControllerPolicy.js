const Joi = require('@hapi/joi');

module.exports = {
  modify (req, res, next) {
    const schema = Joi.object({
      id: Joi.number(),
      title: Joi.string().min(1).max(32),
      artist: Joi.string().min(1).max(32),
      genre: Joi.string().min(1).max(32),
      album: Joi.string().min(1).max(32),
      albumImageUrl: Joi.string(),
      youtubeId: Joi.string(),
      lyrics: Joi.string(),
      tab: Joi.string(),
      createdAt: Joi.string(),
      updatedAt: Joi.string()
  })
    const { error, value } = schema.validate(req.body)
    if (error) {
      switch (error.details[0].context.key) {
        case 'title':
          res.status(400).send({
            error: 'Wrong title format.'
          })
          break
        case 'artist':
          res.status(400).send({
            error: 'Wrong artist format.'
          })
          break
        case 'genre':
          res.status(400).send({
            error: 'Wrong genre format.'
          })
          break
        case 'album':
          res.status(400).send({
            error: 'Wrong album format.'
          })
          break
        case 'albumImageUrl':
          res.status(400).send({
            error: 'Wrong albumImageUrl format.'
          })
          break
        case 'youtubeId':
          res.status(400).send({
            error: 'Wrong youtubeId format.'
          })
          break
        case 'lyrics':
          res.status(400).send({
            error: 'Wrong lyrics format.'
          })
          break
        case 'tab':
          res.status(400).send({
            error: 'Wrong tab format.'
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid song Format.'
          })
      }
    } else {
      next()
    }
  }
}
