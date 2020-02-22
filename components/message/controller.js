const store = require('./store');

function addMessage(chat, user, message) {
  return new Promise((resolve, reject) => {
    if(!chat || !user || !message) {
      console.error('[messageController] No hay un usuario o mensaje');
      reject('Los datos son incorrectos');
    }
    const fullMessage = {
      chat: chat,
      user: user,
      message: message,
      date: new Date(),
    };
  
    store.add(fullMessage);
    resolve(fullMessage);
  });
}

function getMessages(filterChat) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterChat));
  });
}

function updateMessage(id, message) {
  console.log(message);
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject('Invalid data');
      return false;
    } else {
      const result = await store.updateText(id, message);
      resolve(result);
    }
  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if(!id) {
      reject('Data Invalid');
      return false;
    }
    
    store.remove(id)
      .then(() => resolve())
      .catch(err => reject(err));
  });

}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
}
