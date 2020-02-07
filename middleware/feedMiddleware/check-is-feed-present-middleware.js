const {feedsService} = require('../../service');

module.exports = async ( req, res, next) => {

    try {

        const { feed_id } =req.params;

        const isFeedPresent = await feedsService.getFeedById(feed_id);

        if (!isFeedPresent){
            throw new Error(`Feed with ID ${feed_id} is not present`)
        }

        req.feed = isFeedPresent.dataValues;

        console.log(isFeedPresent.dataValues);

        next();

    } catch (e) {

        res.status(400).json(e.message);

    }
};

