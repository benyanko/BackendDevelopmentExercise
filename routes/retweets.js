const express = require('express')
const router = express.Router()

const retweet = require('../controllers/retweetController');

// @router  GET /retweets
// @desc    Get all retweets
// @access  Public
router.get('/', retweet.findAll)

module.exports = router
