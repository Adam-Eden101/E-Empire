const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('eempire', 'jawa', 'jawa', {
    host: 'localhost',
    dialect: 'mariadb'
});

async function testdb() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = sequelize;
