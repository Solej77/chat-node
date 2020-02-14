const express = require('express');

const app = express();

app.use('/', function(req, res) {
  res.send('Hola Server');
});

app.listen(3000);
console.log('Server in http://localhost:3000/');