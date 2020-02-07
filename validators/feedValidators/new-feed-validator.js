module.exports = feedObject => {
    const {username,title,url} = feedObject;

    if (!username || !title || !url) {
        throw new Error('feedMiddleware object is not valid')
    }

};
