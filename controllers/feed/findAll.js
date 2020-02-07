const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const FeedModel = dataBase.getModel('Feed');

        const findAll = await FeedModel.findAll();

        if (!findAll.length) {
            throw new Error('feed not found');
        }

        res.json(findAll);
    } catch (e) {
        res.status(400).json(e.message)
    }
};
