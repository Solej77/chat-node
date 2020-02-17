exports.success = function(req, res, message, status) {
  res.status(status || 200).send({
    error: '',
    body: message
  });
}

exports.error = function(req, res, message, status) {
  res.status(status || 404).send({
    error: message,
    body: ''
  });
}