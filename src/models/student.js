'use strict';
module.exports = (sequelize, DataTypes) => {
    const Artist = sequelize.define('artist', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        added_by: { //TODO
            type: DataTypes.BIGINT,
            allowNull: false
        },
        created_at: {
            field: 'created_at',
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        },
        updated_at: {
            field: 'updated_at',
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        },
    }, {
        timestamps: false,
        freezeTableName: true
    });
    return Artist;
};
