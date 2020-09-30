const Config = require('config');
const jwt = require('jsonwebtoken');

const { UnauthorizedError } = require(`${global.__path}/utils/error`);

const modUsers = require(`${global.__path}/models/users`);

exports.verifyUserAndReturnToken = async ({ email, password }) => {
  const user = await modUsers.findOne({ email, password });
  if (!user) {
    throw new UnauthorizedError({});
  }
  const token = jwt.sign({ id: user.id }, Config.auth.secret, {
    expiresIn: '1d',
  });
  return token;
};

exports.verifyToken = async ({ token }) => {
  try {
    const decoded = jwt.verify(token, Config.auth.secret);
    return decoded;
  } catch (err) {
    // TODO: 에러 처리
    return null;
  }
};
