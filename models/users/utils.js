const { randomString } = require(`${global.__path}/utils`);

exports.createId = () => {
  return `usr_${randomString(8)}`;
};
