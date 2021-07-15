module.exports = (sequelize, Sequelize) => {
    const ReTweet = sequelize.define('ReTweet', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        timestamp: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    },
    {
        freezeTableName: true
    })

    return ReTweet;
}