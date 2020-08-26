const serAuth = require(`${global.__path}/services/auth`);

exports.signIn = async (ctx, next) => {
  const { email, password } = ctx.request.body;
  const token = await serAuth.verifyUserAndReturnToken({ email, password });
  ctx.body = token;
};
