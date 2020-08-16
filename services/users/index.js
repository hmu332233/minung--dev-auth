const { isRequired } = require(`${global.__path}/utils`);

const modUsers = require(`${global.__path}/models/users`);

exports.createUser = ({ email, password }) => {
  return modUsers.createUser({
    email,
    password,
  });
};

exports.getList = async () => {
  const users = await modUsers.find({});
  return users;
};

exports.get = async ({ email = isRequired('email') }) => {
  const user = await modUsers.findOne({ email });
  return user;
};
