global.__path = __dirname;

const Config = require('config');
const Koa = require('koa');
const cors = require('@koa/cors');
const router = require('@koa/router')();
const bodyParser = require('koa-bodyparser');

const mongoose = require('mongoose');

const logger = require(`${global.__path}/utils/logger`);

const app = (module.exports = new Koa());
app.use(cors());
app.use(bodyParser());

mongoose.Promise = global.Promise;
mongoose.connect(Config.db.mongodb.url, Config.db.mongodb.opts);
mongoose.set('debug', Config.db.mongodb.debug);

// request log
app.use(async (ctx, next) => {
  logger.info({
    method: ctx.request.method,
    path: ctx.path,
    params: {
      query: ctx.query,
      body: ctx.request.body,
    },
  });
  return next();
});

// error handler
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      code: err.name,
      message: err.message,
    };

    logger.error(err);
  }
});

// response handler
app.use(async (ctx, next) => {
  await next();

  const status = ctx.status || 404;
  if (status === 404) {
    ctx.throw(404);
  }

  ctx.body = {
    code: 'Success',
    message: '',
    body: ctx.body,
  };
});

router.use('/api', require('./api').routes());
app.use(router.routes());
app.use(router.allowedMethods());

if (!module.parent) {
  const port = Config.server.port;
  app.listen(port, () => {
    console.log('listening to port', port);
  });
}
