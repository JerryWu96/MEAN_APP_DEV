let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

//let indexRouter = require('./routes/index');
//let usersRouter = require('./routes/users');
let myRouter = require('./routes/myRouter'); // User-defined js under routes for hw1.
let app = express();

// view engine setup
// express use views to find templates
// __dirname: current directory
// express use internal variable views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));// a variable: static, go looking __dirname(HW1 here)/public

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

app.use('/', myRouter);// User-defined js under routes for hw1.


// for POST method
let bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//
// app.get('/', (req, res) => {
//   // res.send('Hello World!');
//   res.render('index');
// })

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



