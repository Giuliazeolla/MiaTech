function promiseWithFinally(shouldReject) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldReject) {
          reject("Errore: La promessa è stata rifiutata");
        } else {
          resolve("La promessa è stata risolta con successo");
        }
      }, 2000);
    });
  }
  
  promiseWithFinally(true)
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("Esecuzione completata, indipendentemente dall'esito.");
    });