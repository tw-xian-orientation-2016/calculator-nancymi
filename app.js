var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cool = require('cool-ascii-faces');

var routes = require('./routes/index');
var users = require('./routes/users');
var percentage = require('./routes/api/percentage');
var negative = require('./routes/api/negative');
var sum = require('./routes/api/sum');
var sub = require('./routes/api/sub');
var multiply = require('./routes/api/multiply');
var division = require('./routes/api/division');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.set('port', (process.env.PORT || 5000));

app.get('/cool', function(request, response) {
  response.send(cool());
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/api/percentage', percentage);
app.use('/api/negative', negative);
app.use('/api/sum', sum);
app.use('/api/sub', sub);
app.use('/api/multiply', multiply);
app.use('/api/division', division);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


module.exports = app;
