const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const USER = 'db_user_trades';
const PASSWORD = 'Wpk63rUUzEo6';
const DB_NAME = 'trades_db';
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@cluster0-zinxd.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

db.connect(MONGO_URI);


const router = require('./network/routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('Server in http://localhost:3000/');