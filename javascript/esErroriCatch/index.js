function rejectedPromise() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject("Errore: La promessa è stata rifiutata");
      }, 1000);
    });
  }
  
  rejectedPromise()
    .catch((error) => {
      console.error("Gestione dell'errore:", error);
    });