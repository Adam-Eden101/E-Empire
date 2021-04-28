module.exports = app => {
    const students = require();
    const router = require("express").Router();

    router.get('/one', (req, res) => {
        res.json({"message" : 'One'});
    });

    router.get('/two', (req, res) => {
        res.json({"message" : 'Two'});
    });

    router.get('/three', (req, res) => {
        res.json({"message" : 'Three'});
    });

    app.use('/students', router);
}
