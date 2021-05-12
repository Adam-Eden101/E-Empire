const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/index');
const User = require('../models/user');

const Alliance = sequelize.define('alliance', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        lenght: 20,
        unique: true,
        validate: {
            notNull: "Il faut renseigner le nom"
        }
    },
    players: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    }

}, {
    tableName: 'alliance'
});

module.exports = Alliance;
