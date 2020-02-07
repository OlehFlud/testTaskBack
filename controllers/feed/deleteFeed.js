const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {

        const Feed = dataBase.getModel('Feed');
        const id = req.params.feed_id;

            await Feed.destroy({
                where: {
                    id:id
                }
            });

    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
