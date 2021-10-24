var { InternalServerError } = require('./error')

const successHandler = (
  res,
  statusCode = 200,
  responseMessage = {
    'success': true
  }
) => res.status(statusCode).send(responseMessage);

const fileHandler = (
  res,
  statusCode = 200,
  responseMessage
) => {
  res.set('Content-Type', 'application/octet-stream');
  return res.status(statusCode).send(responseMessage);
};

const errorHandler = (
  res,
  statusCode = 500,
  responseMessage = new InternalServerError()
) => res.status(statusCode).send(responseMessage);

module.exports = {
  successHandler,
  fileHandler,
  errorHandler
};
