var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json({ limit: '50mb' }));
router.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
