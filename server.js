const express = require('express');
const app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');

const USER = 'db_user_trades';
const PASSWORD = 'Wpk63rUUzEo6';
const DB_NAME = 'trades_db';
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@cluster0-zinxd.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
db.connect(MONGO_URI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

socket.connect(server);

router(app);

app.use('/app', express.static('public'));

server.listen(3000);
console.log('Server in http://localhost:3000/');