const User = require('../models/user');
const userService = require('../services/users.service')

async function findAll(req, res) {
    const users = await userService.findAll();
    res.json(users);
}

function findByID(req, res) {
    res.json({"message" : 'Le user d\'id ' + req.params.id});
}

module.exports = {
    findAll,
    findByID
}
