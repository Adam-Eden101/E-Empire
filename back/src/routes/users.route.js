const userController = require('../controllers/users.controller')

module.exports = app => {
    const router = require("express").Router();

    router.get('/', userController.findAll);

    router.get('/:id', userController.findById);

    router.post('/', userController.create);

    router.put('/:id', userController.update);

    router.delete('/:id', userController.remove);

    app.use('/users', router);
}
