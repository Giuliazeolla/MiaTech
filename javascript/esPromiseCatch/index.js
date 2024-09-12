function restituisciPromessa (shouldReject) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldReject) {
          reject("Errore: La promessa è stata rifiutata");
        } else {
          resolve("La promessa è stata risolta dopo 2 secondi");
        }
      }, 2000);
    });
  }
  
  restituisciPromessa(true)
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error);
    });