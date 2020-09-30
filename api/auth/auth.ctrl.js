const serAuth = require(`${global.__path}/services/auth`);

exports.signIn = async (ctx, next) => {
  const { email, password } = ctx.request.body;
  const token = await serAuth.verifyUserAndReturnToken({ email, password });
  ctx.body = token;
};

exports.verify = async (ctx, next) => {
  const { token } = ctx.request.body;
  const decoded = await serAuth.verifyToken({ token });
  ctx.body = decoded;
};
