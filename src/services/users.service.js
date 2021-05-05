const { Sequelize } = require('sequelize');
const User = require('../models/user');
const usersRoute = require('../routes/users.route');

async function findAll() {
    const users = await User.findAll();
    return users;
}

async function findById(id) {
    const user = await User.findByPk(id);
    return (user);
}

async function create(user) {
    console.log(user);
    try {
        const newUser = await User.create(user)
        return (newUser);
    } catch (e) {
        return ({ errors: e.errors});
    }
}

async function update(id, user) {

}

async function remove(id) {

}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove,
}
