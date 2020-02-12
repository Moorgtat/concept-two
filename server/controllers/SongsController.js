const {Song} = require('../models')

module.exports = {
  async index (req, res) {
 try {
   const songs = await Song.findAll({
     limit: 10
   })
   res.send(songs)
 } catch (err) {
   res.status(500).send({
     error: 'fetching songs error'
   })
 }
},
  async show (req, res) {
 try {
   const song = await Song.findByPk(req.params.songId)
   res.send(song)
 } catch (err) {
   res.status(500).send({
     error: 'fetching song error'
   })
 }
},
  async post (req, res) {
 try {
   const song = await Song.create(req.body)
   res.send(song)
 } catch (err) {
   res.status(500).send({
     error: 'Creating song error'
   })
 }
},

}
