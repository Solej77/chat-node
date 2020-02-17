const express = require('express');
const router = express.Router();
const response = require('../../network/response');

router.get('/', function(req, res) {
  console.log(req.headers);
  res.header({
    "custom-header": "Header Personalizado",
    "prueba": "prueba"
  });
  response.success(req, res, 'Lista de mensajes');
});

router.post('/', function(req, res) {
  if(req.query.error == "ok"){
    response.error(req, res, 'Error inesperado', 500, 'Es solo una simulación de los errores');
    return false;
  }
  
  response.success(req, res, 'Creado correctamente', 201);
});

router.delete('/', function(req, res) {
  console.log(req.query);
  console.log(req.body)
  res.status(201).send({error: '', body:'Creado correctramente'});
});

module.exports = router;
