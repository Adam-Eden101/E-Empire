const Alliance = require('../../models/alliance')

const allianceMigration = async function migrate() {
    await Alliance.sync();
    console.log("The table Alliance has been created.");
};

module.exports = allianceMigration;
