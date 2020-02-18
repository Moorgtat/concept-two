const {Bookmark} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const {songId, userId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      res.send(bookmark)
    } catch (error) {
      res.status(500).send({
        error: 'Error fetching bookmark'
      })
    }
  },
  async post (req, res) {
    try {
      const {songId, userId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      if (bookmark) {
        return res.status(400).send({
          error : "already bookmarked"
        })
      }
      const newBookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId
      })
      res.send(newBookmark)
    } catch (error) {
      res.status(500).send({
        error: 'Error creating bookmark'
      })
    }
  },
  async delete (req, res) {
    try {
      const {songId, userId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      await bookmark.destroy()
      res.send(bookmark)
    } catch (error) {
      res.status(500).send({
        error: 'Error deleting bookmark'
      })
    }
  }
}
