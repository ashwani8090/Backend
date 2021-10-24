/* eslint-disable max-classes-per-file */
class AuthenticationError extends Error {
  constructor(errorName, errorMessage, errorCode, statusCode, requestId, suggestedAction) {
    super();
    this.isError = true;
    this.errorName = errorName || 'AuthenticationError';
    this.errorMessage = errorMessage || 'Authentication Error Occurs';
    this.errorCode = errorCode || '401';
    this.statusCode = statusCode || 401;
    this.requestId = requestId || null;
    this.suggestedAction = suggestedAction || null;
  }
}

class AuthorizationError extends Error {
  constructor(errorName, errorMessage, errorCode, statusCode, requestId, suggestedAction) {
    super();
    this.isError = true;
    this.errorName = errorName || 'AuthorizationError';
    this.errorMessage = errorMessage || 'Authorization Error Occurs';
    this.errorCode = errorCode || '403';
    this.statusCode = statusCode || 403;
    this.requestId = requestId || null;
    this.suggestedAction = suggestedAction || null;
  }
}

class NotFoundError extends Error {
  constructor(errorName, errorMessage, errorCode, statusCode, requestId, suggestedAction) {
    super();
    this.isError = true;
    this.errorName = errorName || 'NotFoundError';
    this.errorMessage = errorMessage || 'Not Found Error Occurs';
    this.errorCode = errorCode || '404';
    this.statusCode = statusCode || 404;
    this.requestId = requestId || null;
    this.suggestedAction = suggestedAction || null;
  }
}

class ValidationError extends Error {
  constructor(errorName, errorMessage, errorCode, statusCode, requestId, suggestedAction) {
    super();
    this.isError = true;
    this.errorName = errorName || 'ValidationError';
    this.errorMessage = errorMessage || 'Validation Error Occurs';
    this.errorCode = errorCode || '422';
    this.statusCode = statusCode || 422;
    this.requestId = requestId || null;
    this.suggestedAction = suggestedAction || null;
  }
}

class InternalServerError extends Error {
  constructor(errorName, errorMessage, errorCode, statusCode, requestId, suggestedAction) {
    super();
    this.isError = true;
    this.errorName = errorName || 'InternalServerError';
    this.errorMessage = errorMessage || 'Internal Server Error Occurs';
    this.errorCode = errorCode || '500';
    this.statusCode = statusCode || 500;
    this.requestId = requestId || null;
    this.suggestedAction = suggestedAction || null;
  }
}


module.exports = {
  ValidationError,
  InternalServerError
}