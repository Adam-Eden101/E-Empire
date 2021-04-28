const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('User', {
    // - Informations de connexion (email, password, etc)
    // - Informations sociales (username, description, image de profil, etc)
    // - Informations de jeu (score, achievements, troupes, ressources, alliance, etc)
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        length: 40
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        length: 20
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        length: 200
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'user'
});

const migrate = async function migrate() {
    await User.sync();
    console.log("The table User has been created.");
}

module.exports = { User, migrate };
