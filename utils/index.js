const { RequiredError } = require('./error');

exports.isRequired = (parameterName) => {
  throw new RequiredError({ parameterName });
};

exports.randomString = (length) => {
  return [...Array(length)]
    .map(() => (~~(Math.random() * 36)).toString(36))
    .join('');
};
