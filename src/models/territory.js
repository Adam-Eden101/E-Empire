const DataTypes = require('sequelize');
const sequelize = require('../db/index');

const Territory = sequelize.define('territory', {
    //- Informations descriptives (nom, description, emplacement)
    //- Informations militaires (nb et type de troupe, propriétaire)
    //- Information de jeu (date de création, date d'annexion)
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        length: 40,
        unique: true,
        validate: {
            notNull: "Il faut renseigner le nom"
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
        length: 120,
        unique: false
    },
    coordinates: {
        type: DataTypes.STRING,
        allowNull: false,
        length: 10,
        unique: true
    }
}, {
    tableName: 'territory'
});

module.exports = Territory;
