const store = require('./store');

function addChats(users) {
  if(!users || !Array.isArray(users)) {
    return Promise.reject('Invalid user list');
  }

  const chat = {
    users: users,
  };
  return store.add(chat);
}

function listChats(userId) {
  return store.list(userId);
}

module.exports = {
  addChats,
  listChats,
}
