function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if(!user || !message) {
      console.error('[messageController] No hay un usuario o mensaje');
      reject('Los datos son incorrectos');
    }
    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
    };
  
    console.log(fullMessage);
    resolve(fullMessage);
  });
}

module.exports = {
  addMessage,
}
