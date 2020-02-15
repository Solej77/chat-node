const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(router);

router.get('/message', function(req, res) {
  console.log(req.headers);
  res.header({
    "custom-header": "Header Personalizado",
    "prueba": "prueba"
  })
  res.send('Listar mensajes');
});

router.post('/message', function(req, res) {
  res.send('Nuevo mensaje');
});

router.delete('/message', function(req, res) {
  console.log(req.query);
  console.log(req.body)
  res.send(`El mensaje "${req.body.text}" fue elimando`);
});

app.listen(3000);
console.log('Server in http://localhost:3000/');