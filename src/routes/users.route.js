const userController = require('../controllers/users.controller')

module.exports = app => {
    const router = require("express").Router();

    router.get('/', userController.findAll);

    router.get('/:id', userController.findById);
    
    router.post('/', userController.create);

    router.put('/:id', (req, res) => {
        res.json({"message" : 'Modif user d\'id ' + req.params.id});
    });

    router.delete('/:id', (req, res) => {
        res.json({"message" : 'Delete user d\'id ' + req.params.id});
    });


    app.use('/users', router);
}
