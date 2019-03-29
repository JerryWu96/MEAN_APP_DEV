let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
// single quote without a path defaults to the node_module folder
let clog = require('./middleware/clog.js');


// go and grab the file index in the folder routes
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let myRouter = require('./routes/myRouter'); // User-defined js under routes for hw1.
let app = express();

// view engine setup
// express use views to find templates
// __dirname: current directory
// express use internal variable views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// add the middleware(basically a function) to the middleware chain in order
app.use(logger('dev'));
app.use(clog); // middleware example
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));// a variable: static, go looking __dirname(HW1 here)/public

// mount the indexRouter(the reference to the route file index)
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/', myRouter);// User-defined js under routes for hw1.


// for POST method
let bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));// pass 404 into next(the method we use to visit the next middleware in the chain
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page. Send the responsible back to the client (the client of express is the server)
  res.status(err.status || 500); // 404, or 500 internal error in this case
  res.render('error');
});

module.exports = app;



