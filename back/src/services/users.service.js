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
    try {
        const newUser = await User.create(user)
        return (newUser);
    } catch (e) {
        return ({ errors: e.errors});
    }
}

async function update(newUser) {
    const modifiedUser = await newUser.save();
    return (modifiedUser);
}

async function remove(user) {
    const deletedUser = await user.destroy();
    return (deletedUser);
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove,
}
