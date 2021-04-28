const { Sequelize } = require('sequelize');
const User = require('../models/user');

async function findAll() {
    const users = await User.User.findAll();
    return users;
}

module.exports = {
    findAll
}