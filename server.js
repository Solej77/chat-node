const express = require('express');
const app = express();
const server = require('http').Server(app);

const { dbUrl, host, port, publicRoute } = require('./config');

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');

db.connect(dbUrl);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

socket.connect(server);

router(app);

app.use(publicRoute, express.static('public'));

server.listen(3000);
console.log(`Server in ${host}:${port}/`);