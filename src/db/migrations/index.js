const userMigration = require('./user.migration');
const territoryMigration = require('./territory.migration')
const allianceMigration = require('./alliance.migration');

//PENSER A INTEGRER LE DROP ICI

userMigration();
territoryMigration();
allianceMigration();
