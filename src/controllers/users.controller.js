const userService = require('../services/users.service')

async function findAll(req, res) {
    const users = await userService.findAll();
    res.json(users);
}

async function findById(req, res) {
    const user = await userService.findById(req.params.id);
    res.json(user);
}

async function create(req, res) {
    const user = req.query;
    user.score = 0;
    user.level = 1;

    const createdUser = await userService.create(user);
    if (await userService.findById(createdUser.id) != null) {
        res.status(201).json(createdUser);
    } else {
        const errMessages = [];
        if (createdUser.errors != undefined) {
            createdUser.errors.forEach((e) => {
                errMessages.push({"message" : e.message});
            })
            res.status(400).json({
                "errors" : errMessages
            });
        } else {
            res.status(400).json({
                "message" : "Unknown error."
            });
        }
    }
}

module.exports = {
    findAll,
    findById,
    create
}
