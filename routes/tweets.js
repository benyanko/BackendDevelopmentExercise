const express = require('express')
const router = express.Router()

const tweets = require('../controllers/tweetController');
const likes = require('../controllers/likeController');
const retweet = require('../controllers/retweetController');

// @router  GET /tweets
// @desc    Get all tweets
// @access  Public
router.get('/', tweets.findAll)

// @router  POST /tweets
// @desc    Post tweet
// @access  Public
router.post('/', tweets.validate, tweets.create)

// @router  POST /tweets/[:id]/likes
// @desc    Create like to a tweet by tweet id
// @access  Public
router.post('/:id/likes', likes.validate, likes.create)

// @router  POST /tweets/[:id]/retweet
// @desc    Create retweet to a tweet by tweet id
// @access  Public
router.post('/:id/retweet', retweet.validate, retweet.create)

module.exports = router

