const express = require('express');
const router = express.Router();

const app = express();

app.use(router);

router.get('/message', function(req, res) {
  res.send('Listar mensajes');
});

router.post('/message', function(req, res) {
  res.send('Nuevo mensaje');
});

app.listen(3000);
console.log('Server in http://localhost:3000/');