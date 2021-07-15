const Sequelize = require('sequelize')
const PG_HOST = process.env.PG_HOST || 'localhost'
const PG_DB = process.env.PG_DB || 'tweet-db'
const PG_USERNAME = process.env.PG_USERNAME || 'postgres'
const PG_PASSWORD = process.env.PG_PASSWORD || 'password'
const PG_PORT = process.env.PG_PORT || 5432
const PG_DIALECT = process.env.PG_DIALECT || 'postgres'


    const sequelize = new Sequelize(PG_DB, PG_USERNAME, PG_PASSWORD, {
    port: PG_PORT,
    host: PG_HOST,
    dialect: PG_DIALECT,
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.tweets =  require('./models/Tweet')(sequelize, Sequelize);
db.likes =  require('./models/Like')(sequelize, Sequelize);
db.retweets =  require('./models/ReTweet')(sequelize, Sequelize);

// Models Relations/Associations
db.likes.belongsTo(db.tweets, { foreignKey: "TweetId", targetKey: "id" });
db.retweets.belongsTo(db.tweets, { foreignKey: "TweetId", targetKey: "id" });
db.tweets.hasMany(db.likes, { foreignKey: "TweetId", targetKey: "id" });
db.tweets.hasMany(db.retweets, { foreignKey: "TweetId", targetKey: "id" });

module.exports = db;
