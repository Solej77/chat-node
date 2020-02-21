const Model = require('./model');

function addUser(user) {
  const myUser = new Model(user);
  return myUser.save();
 }

 async function getUser(filterUser) {
   let filter = {};
   if (filterUser !== null ) {
     filter = { _id: filterUser }
   }

   const users = await Model.find(filter);
   return users;
 }

module.exports = {
  add: addUser,
  list: getUser,
}