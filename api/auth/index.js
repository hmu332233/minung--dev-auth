const router = require('@koa/router')();
const authCtrl = require('./auth.ctrl');

router.post('/signin', authCtrl.signIn);

module.exports = router;
