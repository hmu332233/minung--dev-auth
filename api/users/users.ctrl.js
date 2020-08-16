const serUsers = require(`${global.__path}/services/users`);

exports.get = async (ctx, next) => {
  const user = await serUsers.get({});
  ctx.body = user;
};

exports.getList = async (ctx, next) => {
  const users = await serUsers.getList();

  ctx.body = users;
};
