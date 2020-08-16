const ExtendableError = require('./ExtendableError');

class RequiredError extends ExtendableError {
  constructor({ parameterName, statusCode = 400 }) {
    const message = `${parameterName} is required!`;
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = RequiredError;
