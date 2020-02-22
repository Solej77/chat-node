const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema ({
  chat: {
    type: Schema.ObjectId,
    ref: 'chat',
  },
  user: {
    type: Schema.ObjectId,
    ref: 'user',
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  file: String,
});

const model = mongoose.model('message', mySchema);

module.exports = model;