const router = require('@koa/router')();
const usersCtrl = require('./users.ctrl');

router.get('/', usersCtrl.getList);
router.get('/:id', usersCtrl.get);

module.exports = router;
