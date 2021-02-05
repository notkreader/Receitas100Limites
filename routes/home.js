var express = require('express');
var router = express.Router();

let home = require('../controllers/home');

router.get('/', home.get_home);

module.exports = router;