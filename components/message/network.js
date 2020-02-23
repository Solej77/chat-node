const express = require('express');
const multer = require('multer')

const { filesRoute } = require('../../config');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

const upload = multer({
  dest: `public/${filesRoute}/`,
});

router.get('/', function(req, res) {
  const filterMessages = req.query.chat || null;
  controller.getMessages(filterMessages)
    .then(messageList => {
      response.success(req, res, messageList, 200);
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500, e);
    })
});

router.post('/', upload.single('file'), function(req, res) {
  const { body, file } = req;

  controller.addMessage(body.chat, body.user, body.message, file)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch(e => {
      response.error(req, res, 'Información invalida', 400, 'Error en el controlador');
    });
});

router.patch('/:id', function(req, res) {
  console.log(req.params.id);
  console.log(req.body.message);
  controller.updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Error interno', 500, err);
    });
});

router.delete('/:id', function(req, res) {
  controller.deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Mensaje ${req.params.id} eliminado`, 200);
    })
    .catch(err => {
      response.error(req, res, 'Error interno', 500, err);
    });
  
});

module.exports = router;
