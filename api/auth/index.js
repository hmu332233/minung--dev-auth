const router = require('@koa/router')();
const authCtrl = require('./auth.ctrl');

router.post('/signin', authCtrl.signIn);
router.post('/verify', authCtrl.verify);

module.exports = router;
