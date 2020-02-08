const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
// app.use('/', indexRouter);
// app.use('/status', indexRouter);
// app.use('/register', indexRouter);
// app.use('/users', usersRouter);

const {sequelize} = require('./models');
const config = require('./config/config');

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port);
    console.log(`Server started on port ${config.port}`)
  })

module.exports = app;
