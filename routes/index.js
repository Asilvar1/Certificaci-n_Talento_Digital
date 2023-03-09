var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ingresar', function(req, res, next) {
  res.render('ingresar', { title: 'Express' });
});

router.get('/escribir', function(req, res, next) {
  res.render('escribir', { title: 'Express' });
});

router.get('/categoria1', function(req, res, next) {
  res.render('categoria1', { title: 'Express' });
});

router.get('/categoria2', function(req, res, next) {
  res.render('categoria2', { title: 'Express' });
});

module.exports = router;
