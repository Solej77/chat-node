const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema ({
  user: {
    type: String,
    default: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const model = mongoose.model('trades', mySchema);

module.exports = model;