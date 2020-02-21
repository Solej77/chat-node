const store = require('./store');

function addUser(name) {
  if(!name) {
    return Promise.reject('Invalid name');
  }

  const user = {
    user: name,
  }

  return store.add(user);
}

async function getUser(filterUser) {
  const list = await store.list(filterUser);
  return list;
}

module.exports = {
  addUser,
  getUser,
}
