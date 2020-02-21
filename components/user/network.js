const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../network/response');


router.post('/', function(req, res) {
  controller.addUser(req.body.user)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((err) => {
      response.error(req, res, 'Internal Error', 500, err);
    })
});

router.get('/', function(req, res) {
  const filterUser = req.query.id || null;
  controller.getUser(filterUser)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Internal Error', 500, err);
    });
});

module.exports = router;
