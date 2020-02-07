const dataBase = require('../../dataBase').getInstance();

module.exports = async feed_id => {

    const FeedModel = dataBase.getModel('Feed');

    const feed = await FeedModel.findByPk(feed_id);

    if (!feed) {
        throw new Error('in DataBase such feedService is doesn’t exist');
    }

    return feed;

};
