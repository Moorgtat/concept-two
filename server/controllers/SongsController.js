const {Song} = require('../models')
const { Op } = require("sequelize");

module.exports = {
  async index (req, res) {
 try {
   let songs = null
   const search = req.query.search
   if (search) {
     songs = await  Song.findAll({
       where: {
         [Op.or]: [
           {title : {
               [Op.like]:`%${search}%`
           }
           },
           {artist : {
               [Op.like]:`%${search}%`
             }
           }
         ]
       }
     })
 } else {
     songs = await Song.findAll({
        limit: 10
      })
    }
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
  async put (req, res) {
    try {
      await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'Editing song error'
      })
    }
  }
}
