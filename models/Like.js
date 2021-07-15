module.exports = (sequelize, Sequelize) => {
    const Like = sequelize.define('Like', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
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

    return Like;
}