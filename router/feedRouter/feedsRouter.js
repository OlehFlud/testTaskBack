const router = require('express').Router();
const {feed} = require('../../controllers');
const {feed: feedMiddleware} = require('../../middleware');

router.get('/findAll/:feed_id', feedMiddleware.checkIsFeedPresentMiddleware, feed.getFeedById);

router.post('/',feedMiddleware.checkFeedValidityMiddleware, feed.createFeed);

router.delete('/:feed_id', feed.deleteFeed);

router.get('/findAll', feed.findAll);

module.exports = router;
