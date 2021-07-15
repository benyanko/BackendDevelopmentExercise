const db = require('../db');
const {check, validationResult} = require('express-validator')
const Likes = db.likes;

// Create a like to tweet
exports.create = async (req, res) => {
    try{
        const like = await Likes.create({
            username: req.body.username,
            TweetId: req.params.id
        })
        return res.status(200).send(like)
    } catch (err){
        return res.status(500).send('Server Error');
    }
};

// Validate like fields
exports.validate =[
    check('username', 'Username are required').notEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({errors: errors.array()});
        next();
    },
];
