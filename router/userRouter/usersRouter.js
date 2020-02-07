const router = require('express').Router();
const {user} = require('../../controllers');
const {user: userMiddleware,token } = require('../../middleware');

router.get('/:user_id',userMiddleware.checkIsUserPresentMiddleware,user.getUserById);
router.post('/',userMiddleware.checkUserValidityMiddleware, user.createUser);

module.exports = router;
