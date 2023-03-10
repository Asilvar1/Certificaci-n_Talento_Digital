var createError = require('http-errors');
var express = require('express');
const exphbs  = require('express-handlebars');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
/* var categoria1Router = require('./routes/index');
var categoria2Router = require('./routes/index');
var ingresarRouter = require('./routes/index');
var escribirRouter = require('./routes/index'); */
var noticiasRouter = require('./routes/noticias');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
/* app.use('/categoria1', categoria1Router);
app.use('/categoria2', categoria2Router);
app.use('/ingresar', ingresarRouter);
app.use('/escribir', escribirRouter); */
app.use('/noticias', noticiasRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
