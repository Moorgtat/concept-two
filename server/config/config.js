module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'conceptdb',
    user: process.env.DB_USER || 'conceptdb',
    password: process.env.DB_PASS || 'conceptdb',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './conceptdb.sqlite'
    }
  }
}
