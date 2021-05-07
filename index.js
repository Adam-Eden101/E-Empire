const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const users = require('./src/routes/users.route')(app);

app.get('/', (req, res) => {
    res.json({"message" : 'Bonjour'});
});

app.listen(3000, () => {
    console.log('Le serveur est en route\n');
});
