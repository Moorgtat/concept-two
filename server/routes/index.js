const express = require('express');
const router = express.Router();

// GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// LEARN node express
router.get('/status', (req, res) => {
  res.send({
    message: 'hello world'
  })
});

module.exports = router;
