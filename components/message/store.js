const db = require('mongoose');
const Model = require('./model');

const USER = 'db_user_trades';
const PASSWORD = 'Wpk63rUUzEo6';
const DB_NAME = 'trades_db';
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@cluster0-zinxd.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

db.Promise = global.Promise;
db.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log('[db] Conectada con éxito');

function addMessage(message) {
  // list.push(message);
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessage() {
  // return list;
  const messages = await Model.find();
  return messages;
}

module.exports = {
  add: addMessage,
  list: getMessage,
  // get
  // update
  // delete
}