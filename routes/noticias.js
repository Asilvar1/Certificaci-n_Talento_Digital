var express = require('express');
var router = express.Router();
const path = require('path');
const { getNoticias } = require('../controller/noticias');

/* GET home page. */
router.get('/', getNoticias)

module.exports = router;