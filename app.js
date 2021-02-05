var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var homeRouter = require('./routes/home');
var entradasRouter = require('./routes/entradas');
var carneRouter = require('./routes/carne');
var peixeRouter = require('./routes/peixe');
var mariscoRouter = require('./routes/marisco');
var vegetarianoRouter = require('./routes/vegetariano');
var sobremesasRouter = require('./routes/sobremesas');
var bebidasRouter = require('./routes/bebidas');
var forumRouter = require('./routes/forum');
var jogoRouter = require('./routes/jogo');
var loginRouter = require('./routes/login');
//var signupRouter = require('./routes/signup');

var app = express();

app.set('views', path.join(__dirname, 'html'));
app.set('views engine', 'html');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/entradas', entradasRouter);
app.use('/carne', carneRouter);
app.use('/peixe', peixeRouter);
app.use('/marisco', mariscoRouter);
app.use('/vegetariano', vegetarianoRouter);
app.use('/sobremesas', sobremesasRouter);
app.use('/bebidas', bebidasRouter);
app.use('/forum', forumRouter);
app.use('/jogo', jogoRouter);
app.use('/login', loginRouter);
//app.use('/login/signup', signupRouter);

app.use(function(req, res, next) {
    next(createError(404));
});

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});