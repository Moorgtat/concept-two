const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const {sequelize} = require('./models');
const config = require('./config/config');
const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('./passport')

require('./routes/routes')(app)

sequelize.sync({force: false})
  .then(() => {
    app.listen(config.port);
    console.log(`Server started on port ${config.port}`)
  })

module.exports = app;
