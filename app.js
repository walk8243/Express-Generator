const createError   = require('http-errors'),
      express       = require('express'),
      path          = require('path'),
      cookieParser  = require('cookie-parser'),
      log4js        = require('log4js');

const indexRouter = require('./routes/index'),
      usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

switch(app.get('env')) {
  case 'production':
    app.use(log4js.connectLogger(process.logger, {
      level: 'INFO',
      format: ':remote-addr - ":method :url HTTP/:http-version" :status :content-length ":referrer" ":user-agent"'
    }));
    break;
  default:
    app.use(log4js.connectLogger(process.logger, { level: 'auto', format: ':method :status :url' }));
    break;
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  process.logger.error(err);

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
