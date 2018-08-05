/**
 * Error handling middleware
 */
const errorHandler = (err, req, res, next) => { // eslint-disable-line no-unused-vars
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Respond with error
  res.status(err.status || 500);
  res.send(err.message);
};

module.exports = errorHandler;
