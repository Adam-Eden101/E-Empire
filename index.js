const express = require('express');
const app = express();
const students = require('./src/routes/students')(app);

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});
  

app.get('/', (req, res) => {
    res.json({"message" : 'Bonjour'});
});

app.listen(3000, () => {
    console.log('Le serveur est en route\n');
});
