const Territory = require('../../models/territory')

const territoryMigration = async function migrate() {
    await Territory.sync();
    console.log("The table Territory has been created.");
}

module.exports = territoryMigration;
