const express = require('express');
const bodyParser = require('body-parser');
const response = require('./network/response');
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
  });
  response.success(req, res, 'Lista de mensajes');
});

router.post('/message', function(req, res) {
  if(req.query.error == "ok"){
    response.error(req, res, 'Error simulado', '400')
  }
  
  response.success(req, res, 'Creado correctamente', 201);
});

router.delete('/message', function(req, res) {
  console.log(req.query);
  console.log(req.body)
  res.status(201).send({error: '', body:'Creado correctramente'});
});

app.use('/app', express.static('public'));

app.listen(3000);
console.log('Server in http://localhost:3000/');