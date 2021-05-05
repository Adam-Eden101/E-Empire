const { DataTypes } = require('sequelize');
const sequelize = require('../db/index');

const User = sequelize.define('User', {
    // - Informations de connexion (email, password, etc)
    // - Informations sociales (username, description, image de profil, etc)
    // - Informations de jeu (score, achievements, troupes, ressources, alliance, etc)
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        length: 40,
        unique: true,
        validate: {
            notNull: {
                msg: "Il faut renseigner l'email"
            },
            isEmail: {
                msg: "L'email ne respecte pas le format requis."
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Il faut renseigner le mot de passe."
            },
        }
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        length: 20,
        unique: true,
        validate: {
            notNull: {
                msg: "Il faut renseigner le username."
            },
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
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

module.exports = User;
