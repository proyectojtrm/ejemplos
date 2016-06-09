var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AVANCES EN COMPUTACION' , nombre: 'JONNY TITO TARQUIOLA ROJAS' });
});

module.exports = router;
