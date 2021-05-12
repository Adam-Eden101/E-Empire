const userService = require('../services/users.service')

async function findAll(req, res) {
    const users = await userService.findAll();
    res.status(200).json(users);
}

async function findById(req, res) {
    const user = await userService.findById(req.params.id);
    if (user != null) {
        res.status(200).json(user);
    } else {
        res.status(404).json({"message" : "User not found" });
    }
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

async function update(req, res) {
    console.log(req.body);

    const user = await userService.findById(req.params.id)
    const userData = req.query;

    if (userData.username) {
        user.username = userData.username;
    }

    const modifiedUser = await userService.update(user);
    res.status(200).json(modifiedUser);
}

async function remove(req, res) {
    const user = await userService.findById(req.params.id);
    const deletedUser = await userService.remove(user);
    res.status(204).json(deletedUser);
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
}
