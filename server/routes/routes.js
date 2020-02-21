const AuthenticationController = require('../controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy')
const SongsController = require('../controllers/SongsController')
const BookmarksController = require('../controllers/BookmarksController')
const isAuthenticated = require('../policies/isAuthenticated')

module.exports = (app) => {
    app.post('/register',
      AuthenticationControllerPolicy.register,
      AuthenticationController.register)
    app.post('/login',
      AuthenticationController.login)

    app.get('/songs',
      SongsController.index)
    app.get('/songs/:songId',
      SongsController.show)
    app.put('/songs/:songId',
      isAuthenticated,
      SongsController.put)
    app.post('/songs',
      isAuthenticated,
      SongsController.post)

    app.get('/bookmarks',
      isAuthenticated,
      BookmarksController.index)
    app.get('/allBookmarks',
      isAuthenticated,
      BookmarksController.indexAll)
    app.post('/bookmarks',
      isAuthenticated,
      BookmarksController.post)
    app.delete('/bookmarks',
      isAuthenticated,
      BookmarksController.delete)

}
