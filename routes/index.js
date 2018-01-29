var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NodeJS Hello World' });
});

router.get('/extraPage', function(req, res){
  res.render('extraPage.jade', {title: 'Extra Internal Page'})
});

module.exports = router;
