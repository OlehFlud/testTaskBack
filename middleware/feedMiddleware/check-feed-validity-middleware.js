const {feedValidators} = require ('../../validators');

module.exports = (req,res,next) => {

    try {
        const feed = req.body;
        feedValidators.newFeedValidator(feed);

        next()
    }   catch (e) {

        res.status(400).json(e.message);
    }

};
