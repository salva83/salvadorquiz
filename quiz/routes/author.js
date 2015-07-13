var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  //res.send('Autor Salvador');
res.render('author', { title: '' });
});




module.exports = router;