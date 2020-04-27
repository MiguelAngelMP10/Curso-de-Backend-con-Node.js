const { config } = require('../../config/index');

function withErrorStack(error, stack) {
  if (config.dev) {
    return { error, stack };
  }

  return error;
}

function logErrors(err, req, res, next) {
  // eslint-disable-next-line no-console
  console.log(err);
  next(err);
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  res.status(err.status || 500);
  res.json(withErrorStack(err.message, err.stack));
}

module.exports = {
  logErrors,
  errorHandler,
};
