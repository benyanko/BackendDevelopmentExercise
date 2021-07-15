const db = require('../db');
const {check, validationResult} = require('express-validator')
const Tweet = db.tweets;

// Post a Tweet
exports.create = async (req, res) => {
    try{
        const tweet = await Tweet.create({
            textContent: req.body.textContent,
            username: req.body.username,
        })
        return res.status(200).send(tweet)
    } catch (err){
        return res.status(500).send('Server Error');
    }
};

// Get all Tweets
exports.findAll = async (req, res) => {
    try{
        const tweets = await Tweet.findAll({
            include: [{
                model: db.likes,
                as: 'Likes'
            },
                {
                    model: db.retweets,
                    as: 'ReTweets'
                }],
            attributes: { exclude: ['createdAt', 'updatedAt']},
        })

        let tweetsListJson = []
        tweets.forEach(function(tweet) {
            let tweetJson = {
                id: tweet.id,
                textContent: tweet.textContent,
                username: tweet.username,
                timestamp: tweet.timestamp,
                likesCount: tweet.Likes.length,
                retweetCount: tweet.ReTweets.length}
            tweetsListJson.push(tweetJson)
        })

        res.status(200).send(tweetsListJson)
    } catch (err){
        return res.status(500).send('Server Error');
    }
};

// Validate tweet fields
exports.validate =[
    check('username', 'Username are required').notEmpty(),
    check('textContent', 'Text Content are required').notEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({errors: errors.array()});
        next();
    },
];
