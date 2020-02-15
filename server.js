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
  res.status(201).send({error: '', body: 'Creado correctamente'});
});

router.delete('/message', function(req, res) {
  console.log(req.query);
  console.log(req.body)
  res.status(201).send({error: '', body:'Creado correctramente'});
});

app.listen(3000);
console.log('Server in http://localhost:3000/');