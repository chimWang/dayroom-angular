var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {key: 'value', hello: 'world'};
  res.end(JSON.stringify(data));
});

module.exports = router;
