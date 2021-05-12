const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const users = require('./src/routes/users.route')(app);

app.get('/', (req, res) => {
    res.json({"message" : 'API E-Empire'});
});

app.listen(3000, () => {
    console.log('Le serveur est en route (3000)\n');
});
