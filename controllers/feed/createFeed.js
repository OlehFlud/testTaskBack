const {feedsService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const appRoot = global.appRoot;
        const feedToCreate = req.body;
        const {feed_id} = req.body;
        await feedsService.createFeed(feedToCreate, feed_id);
    } catch (e) {
        res.status(400).json(e.message);
    }
};


