const express = require('express');
const router = express.Router();
const controller = require('./controller');
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
  const { body } = req;
  controller.addMessage(body.user, body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch(e => {
      response.error(req, res, 'Información invalida', 400, 'Error en el controlador');
    });

  if(req.query.error == "ok"){
    
    return false;
  }
  
});

router.delete('/', function(req, res) {
  console.log(req.query);
  console.log(req.body)
  res.status(201).send({error: '', body:'Creado correctramente'});
});

module.exports = router;
