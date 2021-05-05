const User = require("../../models/user");

const userMigration = async function migrate() {
    await User.sync({ force: true });
    console.log("The table User has been created.");
}

module.exports = userMigration;
