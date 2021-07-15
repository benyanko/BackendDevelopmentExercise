const db = require('../db');
const {check, validationResult} = require('express-validator')
const ReTweet = db.retweets;

// Create a retweet to tweet
exports.create = async (req, res) => {
    try{
        const retweet = await ReTweet.create({
            username: req.body.username,
            TweetId: req.params.id
        })
        return res.status(200).send(retweet)
    } catch (err){
        return res.status(500).send('Server Error');
    }
};

// Get all ReTweets
exports.findAll = async (req, res) => {
    try{
        const retweets = await ReTweet.findAll({
            include: [{
                model: db.tweets,
                as: 'Tweet'
            },
            ]
        })

        let retweetsListJson = []
        retweets.forEach(function(retweet) {
            let retweetJson = {
                id: retweet.id,
                retweetUsername: retweet.username,
                tweetId: retweet.Tweet.id,
                tweetUsername: retweet.Tweet.username,
                textContent: retweet.Tweet.textContent,
                timestamp: retweet.timestamp,
            }
            retweetsListJson.push(retweetJson)
        })

        res.status(200).send(retweetsListJson)
    } catch (err){
        return res.status(500).send('Server Error');
    }
};

// Validate retweet fields
exports.validate =[
    check('username', 'Username are required').notEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({errors: errors.array()});
        next();
    },
];