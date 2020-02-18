module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {})

  Bookmark.associate = function (models) {
    Bookmark.belongsTo(models.User, { constraints: false })
    Bookmark.belongsTo(models.Song, { constraints: false })
  }

  return Bookmark
}
