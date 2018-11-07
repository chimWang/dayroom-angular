var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// var proxy = require('http-proxy-middleware');


var menus = require('./routes/menus')
var goods = require('./routes/goods')

var app = express();

//代理
// var options = {
//   target: 'http://localhost:8888',
//   changeOrigin: true,
//   pathRewrite: {
//       '^/easyoffer' : 'http://localhost:8888/',
//   }
// };
// var exampleProxy = proxy(options);  //开启代理功能，并加载配置
// app.use('/',exampleProxy);//对地址为’/‘的请求全部转发

//跨域
app.all('*', function(req, res, next) {
  var origin = typeof(req.headers.origin) == "undefined" ? "*" : req.headers.origin;
  res.header("Access-Control-Allow-Origin", origin);
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// connect to mongodb
var url = 'mongodb://localhost:27017/dayroom'
mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.on('error', function (err) {
  console.log('Mongo Error:' + err);
}).on('open', function () {
  console.log('Connection opened');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/menus', menus);
app.use('/goods', goods);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;



