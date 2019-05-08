const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const logger = require('morgan');
const passport = require('passport');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const cors = require('cors');
const keys = require('./config/keys');

const nytimesRouter = require('./routes/nytimes-routes'); // User-defined router for hw3.
const authRoutes = require('./routes/auth-routes');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.set('view engine', 'ejs');


// set up session cookies
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// connect to mongodb
mongoose.connect(keys.mongodb.dbURL, {useNewUrlParser: true},  () => {
  console.log('Mongodb Atlas connected!');
});

// set up routes
app.use('/auth', authRoutes);

// nyctimes page
app.use('/nyctimes', nytimesRouter);

// create home route
app.get('/', (req, res) => {
  res.render('home', {user: req.user}); // send user back to view ejs
});

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

app.listen(3000, () => {
  console.log('app is now listening for requests on port 3000');
});

module.exports = app;
