const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
  user: {
    type: String,
    default: true,
  },
});

const model = mongoose.model('user', mySchema);

module.exports = model;
