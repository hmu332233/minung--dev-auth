const router = require('@koa/router')();
const usersRouter = require('./users');
const authRouter = require('./auth');

router.use('/auth', authRouter.routes());
router.use('/users', usersRouter.routes());

module.exports = router;
