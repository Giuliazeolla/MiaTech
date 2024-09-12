function resolveOrReject(shouldResolve) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve("Successo: La promessa è stata risolta.");
        } else {
          reject("Errore: La promessa è stata rifiutata.");
        }
      }, 1000);
    });
  }
  
  resolveOrReject(true).then((successMessage) => {
      console.log(successMessage);
    })
    .catch((errorMessage) => {
      console.error(errorMessage);
    });